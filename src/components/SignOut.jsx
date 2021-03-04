import React from 'react'
import {auth} from '../services/firebase'

const SignOut = () => {
    return auth().currentUser && (
        <div>
            <button onclick={()=> auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut