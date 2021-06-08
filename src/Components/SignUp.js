import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div id='SigUpContainer'>
         <p>Please Sign Up</p>
          <form id='SignUpPageForm'>
            <input placeholder='Login' type='text' className='LoginInputs'></input>
            <input placeholder='Password' type='password' className='LoginInputs'></input>
            <button id='LoginPageButton' type='submit'>Sign Up</button>
          </form>
          <Link to="/">go back</Link>
        </div>
    )
}

export default SignUp;
