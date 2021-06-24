import React from 'react';
import ListItem from './ListItem';


const ListsWrapper = ({ loggedUser, setLoggedUser }) => {

    const logOut = () => {
        setLoggedUser('')
    }

    return (
        <div id='ListWrapperContainer'>
            <div id='ListWrapperHeader'>
              <p>Hello {loggedUser}</p>
              <p>Your's Shared Lists</p>
              <button onClick={() => logOut()}>Logout</button>
            </div>
            <div id='ListWrapperBody'>
              <h1>wrapper body</h1>
              <ListItem />
            </div>
        </div>
    )
}

export default ListsWrapper
