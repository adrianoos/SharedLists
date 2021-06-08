import { Link } from 'react-router-dom'

const LoginPage = ({login, password, getCredentials, updateLogin, updatePassword}) => {


    return (
        <div id='LoginPageMainContainer'>
          <p id='Title'>Shared Lists</p>
          <form id='LoginPageForm' onSubmit={getCredentials}>
          <input value={login} placeholder='Login' type='text' className='LoginInputs' onChange={updateLogin}></input>
          <input value={password} placeholder='Password' type='password' className='LoginInputs' onChange={updatePassword}></input>
          <button id='LoginPageButton' type='submit'>Login</button>
          </form>
          <div id='LoginPageLowerTextContainer'>
           <p>don't have account ? </p>
           <Link className='link' to="/SignUp">sign up</Link>
          </div>

        </div>
    )
};

export default LoginPage;
