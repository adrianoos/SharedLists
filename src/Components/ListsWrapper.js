import React, {useState} from 'react';
import ListItem from './ListItem';
import ListsManager from './ListsManager';


const ListsWrapper = ({ loggedUser, setLoggedUser }) => {

  const [ selectedList, setSelectedList ] = useState('')

    const logOut = () => {
        setLoggedUser('')
    }

    const lists = [
      {title: 'ShoppingList',items: ['banana', 'butter', 'bread']},
      {title: 'Todos',items: ['pay check', 'do laundry']},
      {title: 'reminders', items:['item1', 'item2', 'item3']}]

    return (
        <div id='ListWrapperContainer'>
            <div id='ListWrapperHeader'>
              <p>Hello {loggedUser}</p>
              <p>Your's Shared Lists</p>
              <button onClick={() => logOut()}>Logout</button>
            </div>
            <div id='ListWrapperBody'>
              <ListsManager lists={lists} selectedList={selectedList} setSelectedList={setSelectedList}/>
              {selectedList ? <ListItem selectedList={selectedList}/> : ''}
            </div>
        </div>
    )
};

export default ListsWrapper
