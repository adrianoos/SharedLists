import './App.css';
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div id='MainContainer'>
        <Route exact path='/'>
         <LoginPage />
        </Route>
        <Route exact path='/signUp'>
          <SignUp />
        </Route>
      </div>
    </Router>
  );
}

export default App;
