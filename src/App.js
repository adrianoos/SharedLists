import React, { useState, useEffect }from 'react'
import './App.css';
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import dataBase from './config'

function App() {

  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ credentials, setCredentials ] = useState([])

  console.log(login)
  console.log(password)
  console.log(credentials)

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

//useEffect(() => {
//  dataBase.ref("/credentials").push(credentials)
//}, [credentials])

  return (
    <Router>
      <div id='MainContainer'>
        <Route exact path='/'>
         <LoginPage
          login={login}
          password={password}
          getCredentials={getCredentials}
          updateLogin={updateLogin}
          updatePassword={updatePassword}
          />
        </Route>
        <Route exact path='/signUp'>
          <SignUp
              login={login}
              password={password}
              getCredentials={getCredentials}
              updateLogin={updateLogin}
              updatePassword={updatePassword}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
