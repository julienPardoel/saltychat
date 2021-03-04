import React from 'react'
import {auth} from '../services/firebase'

const SignOut = () => {
    return auth().currentUser && (
        <div>
            <button onClick={()=> auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut