import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({login, password, getCredentials, updateLogin, updatePassword, setLocation}) => {

    useEffect(() => {
        setLocation(window.location.href)
           }, [])

    return (
        <div id='SigUpContainer'>
         <p>Please Sign Up</p>
          <form id='SignUpPageForm' onSubmit={getCredentials}>
            <input value={login} placeholder='Set Login' type='text' className='LoginInputs' onChange={updateLogin}></input>
            <input value={password} placeholder='Set Password' type='password' className='LoginInputs' onChange={updatePassword}></input>
            <button id='LoginPageButton' type='submit'>Sign Up</button>
          </form>
          <Link className='link' to="/">go back</Link>
        </div>
    )
}

export default SignUp;
