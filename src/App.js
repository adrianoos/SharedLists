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
  setLoggedUser(credentials.user) // Login in
} else if (existingLogins.filter(item => item.user === credentials.user).length > 0 && !location.includes('SignUp') && existingLogins.filter(item => item.password === credentials.password).length === 0) {
  console.log('złe hasło') // Wrong Password
} else if (existingLogins.filter(item => item.user === credentials.user).length > 0 && location.includes('SignUp')) {
  console.log('user istnieje')// User name already taken
} else if (existingLogins.filter(item => item.user === credentials.user).length === 0 && location.includes('SignUp') && credentials.password.length > 0) {
  console.log('konto założone') // New Account Created
} else if (existingLogins.filter(item => item.user === credentials.user).length === 0 && location.includes('SignUp') && credentials.password.length <= 0) {
  console.log('za krótkie hasło') // Password to short
}
};

console.log(loggedUser)

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
    </>

  );
}

export default App;
