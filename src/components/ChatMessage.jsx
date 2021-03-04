
import { auth } from '../services/firebase';


const ChatMessage = ({message}) => {

    const { text, uid , photoURL, displayName} = message;

    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || "https://hhp-blog.s3.amazonaws.com/2017/05/iStock-611786974-300x300.jpg"} />
            <p>{text}</p>
            <p>{displayName}</p>
            
            

        </div>
    )
}

export default ChatMessage
