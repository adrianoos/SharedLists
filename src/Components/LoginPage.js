import React, { useState }from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

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
    };

    return (
        <div id='LoginPageMainContainer'>
          <p id='Title'>Shared Lists</p>
          <form id='LoginPageForm' onSubmit={getCredentials}>
          <input placeholder='Login' type='text' className='LoginInputs' onChange={updateLogin}></input>
          <input placeholder='Password' type='password' className='LoginInputs' onChange={updatePassword}></input>
          <button id='LoginPageButton' type='submit'>Login</button>
          </form>
          <div id='LoginPageLowerTextContainer'>
           <p>don't have account ? </p>
           <Link to="/SignUp">sign up</Link>
          </div>

        </div>
    )
};

export default LoginPage;
