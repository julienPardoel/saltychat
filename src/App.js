import React from 'react'
import { auth } from './services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Chat from './components/Chat'

import './App.css';

function App() {
  const[user] = useAuthState(auth());
  console.log(user)
  return (
    <div className="App">
      <header>
        <h1>Bienvenue sur SaltyChat</h1>
        <img src="salt-shaker.png" alt=""/>
        {/* <p className="userName">Vous êtes connecté(e) en tant que :<br/>{user.displayName}</p> */}
        <SignOut />
      </header>
      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
      <footer>
        <p>© CopyLeft - Tout gauche reservés</p>
      </footer>
    </div>
  );
}

export default App;
