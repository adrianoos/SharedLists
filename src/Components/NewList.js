import React, {useState} from 'react';
import { BsPencil } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { GrAddCircle } from 'react-icons/gr';

const NewList = ({setAddList}) => {

    const [ titleInput, SetTitleInput ] = useState('')
    const [ title, SetTitle ] = useState('')
    const [ itemValue, SetItemValue ] = useState('')
    const [ listItems, SetListItems ] = useState([])

 const updateTitleInput = (e) => {
    SetTitleInput(e.target.value)
 }

const updateTitle = (e) => {
    e.preventDefault()
    SetTitle(titleInput)
}

const updateListItem = (e) => {
    e.preventDefault()
    SetListItems([...listItems, itemValue] )
    SetItemValue('')
}

const updateListItemValue = (e) => {
   SetItemValue(e.target.value)
}

const pencilClick = () => {
    SetTitle('')
}

const cancelNewList = () => {
    setAddList('')
}

    return (
        <div id='NewList'>
          <GiCancel id='NewListCancel' onClick={cancelNewList}/>
          <p id='NewListSave'>Save List</p>
          { title ?
          <div id='filledTitle'>
            <h1>{title}</h1>
            <BsPencil id='pencil' onClick={pencilClick}/>
          </div>
          :
             <form onSubmit={updateTitle}>
               <input id='NewListTitleInput' placeholder='List title' onChange={updateTitleInput}></input>
             </form>
            }
            <form id='AddListItemsForm' onSubmit={updateListItem}>
            <input placeholder='Add Item' onChange={updateListItemValue} value={itemValue}></input>
            </form>
            <ul id='ListItemsDisplay'>
                {listItems.map( item =>
                <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default NewList;
