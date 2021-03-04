import React, { useState } from 'react'
import firebase, { auth, db } from '../services/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

const Chat = () => {
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createAt').limitToLast(25);


    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL} = auth().currentUser;
        await messagesRef.add({
            text:formValue,
            createAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid, photoURL

        })

        setFormValue('');
    }

    return (
        <>
            <main>
                {messages && messages.map((msg) =>
                    <ChatMessage key={msg.id} message={msg} />
                )}
            </main>
            <form onSubmit = {sendMessage}>
                <input type="text" value={formValue} onChange={(e)=>setFormValue(e.target.value)} placeholder="Say something salty"/>
                <button type="submit" disabled={!formValue}>Send !</button>
            </form>
        </>
    )
}

export default Chat
