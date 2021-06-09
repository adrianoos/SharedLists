import React from 'react'


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
        </div>
    )
}

export default ListsWrapper
