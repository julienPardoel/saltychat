import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from './services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Chat from './components/Chat'


import './App.css';

function App() {
  const[user] = useAuthState(auth());
  return (
    <div className="App">
      <header>
        <h1>Welcome to SaltyChat</h1>
        <img src="salt-shaker.png" alt=""/>
        <SignOut />
      </header>
      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
