import React, { useState, useEffect, useRef } from 'react'
import firebase, { auth, db } from '../services/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

const Chat = () => {
    const scroller = useRef();

    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25);


    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL, displayName} = auth().currentUser;
        await messagesRef.add({
            text:formValue,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid, photoURL, displayName

        })

        setFormValue('');
    }

    useEffect(() => {
        scroller.current.scrollIntoView({behavior:'smooth'});
    },[messages])

    return (
        <>
            <main>
                {messages && messages.map((msg) =>
                    <ChatMessage key={msg.id} message={msg} />
                )}
                <span ref={scroller}></span>
            </main>
            <form onSubmit = {sendMessage}>
                <input className="inputText" type="text" value={formValue} onChange={(e)=>setFormValue(e.target.value)} placeholder="Écrivez ici votre message..."/>
                <button className="btnSend" type="submit" disabled={!formValue}> <img src="salt-shaker.png" alt=""/> </button>
            </form>
        </>
    )
}

export default Chat
