import React from 'react'
import {auth} from '../services/firebase'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new auth.GoogleAuthProvider();
        auth().signInWithPopup(provider);
    }
    
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignIn
