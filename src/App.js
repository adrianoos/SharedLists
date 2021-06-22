import React, { useState, useEffect }from 'react'
import './App.css';
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import ListsWrapper from './Components/ListsWrapper'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import dataBase from './config'

function App() {

  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ credentials, setCredentials ] = useState([])
  const [ existingLogins, setExistingLogins ] = useState([])
  const [ loggedUser, setLoggedUser ] = useState(false)
  const [ location, setLocation ] = useState('')
  const [ showPopUp, setShowPopUP ] = useState(false)
  const [ popUpMessage, setPopUpMessage ] = useState('')

  const updateLogin = (e) => {
    setLogin(e.target.value)
};

const updatePassword = (e) => {
    setPassword(e.target.value)
};

const getCredentials = (e) =>{
    e.preventDefault()
    setCredentials({user: login, password: password})
    setLogin('')
    setPassword('')
};

useEffect(() => {
 signUp()
 }, [credentials])

const signUp = () => {
  dataBase.ref("/credentials").on("value", (snapshot) => {
        const credentials = snapshot.val();
        const users = Object.entries(credentials || {}).map(([id, user]) => ({user: user.user, password: user.password}))
        setExistingLogins(users);
      });

if (existingLogins.filter(item => item.user === credentials.user).length > 0 && !location.includes('SignUp') && existingLogins.filter(item => item.password === credentials.password).length > 0) {
  setLoggedUser(credentials.user)
  setShowPopUP(true)
  setTimeout(() => {setShowPopUP(false)}, 2500)
  setPopUpMessage('Logged In')
} else if (existingLogins.filter(item => item.user === credentials.user).length > 0 && !location.includes('SignUp') && existingLogins.filter(item => item.password === credentials.password).length === 0) {
  setShowPopUP(true)
  setTimeout(() => {setShowPopUP(false)}, 2500)
  setPopUpMessage('Wrong Password')
} else if (existingLogins.filter(item => item.user === credentials.user).length > 0 && location.includes('SignUp')) {
  setShowPopUP(true)
  setTimeout(() => {setShowPopUP(false)}, 2500)
  setPopUpMessage('UserName already taken')
} else if (existingLogins.filter(item => item.user === credentials.user).length === 0 && location.includes('SignUp') && credentials.password.length > 0) {
  dataBase.ref("/credentials").push(credentials)
  setLoggedUser(credentials.user)
  setShowPopUP(true)
  setTimeout(() => {setShowPopUP(false)}, 2500)
  setPopUpMessage('Account created')
} else if (existingLogins.filter(item => item.user === credentials.user).length === 0 && location.includes('SignUp') && credentials.password.length <= 0) {
  setShowPopUP(true)
  setTimeout(() => {setShowPopUP(false)}, 2500)
  setPopUpMessage('Password To short')
}
};

  return (
    <>
    { !loggedUser ?
    <Router>
      <div id='MainContainer'>
        <Route exact path='/'>
         <LoginPage
          login={login}
          password={password}
          getCredentials={getCredentials}
          updateLogin={updateLogin}
          updatePassword={updatePassword}
          setLocation={setLocation}
          />
        </Route>
        <Route exact path='/signUp'>
          <SignUp
              login={login}
              password={password}
              getCredentials={getCredentials}
              updateLogin={updateLogin}
              updatePassword={updatePassword}
              setLocation={setLocation}
          />
        </Route>
      </div>
    </Router>
    :
    <ListsWrapper
     loggedUser={loggedUser}
     setLoggedUser={setLoggedUser}
     />}
     { showPopUp ?
         <div id='PopUpModal'>
           <h1>{popUpMessage}</h1>
         </div>:
         ''
    }
    </>

  );
}

export default App;
