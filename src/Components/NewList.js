import React, {useState} from 'react';
import { BsPencil } from 'react-icons/bs';

const NewList = () => {

    const [ titleInput, SetTitleInput ] = useState('')
    const [ title, SetTitle ] = useState('')


 const updateTitleInput = (e) => {
    SetTitleInput(e.target.value)
 }

const updateTitle = (e) => {
    e.preventDefault()
    SetTitle(titleInput)
}

const pencilClick = () => {
    SetTitle('')
}

    return (
        <div id='NewList'>
          { title ?
          <div id='filledTitle'>
            <h1>{title}</h1>
            <BsPencil id='pencil' onClick={pencilClick}/>
          </div>
          :
             <form onSubmit={updateTitle}>
               <input id='NewListTitleInput' placeholder='Title' onChange={updateTitleInput}></input>
             </form>
            }
        </div>
    )
}

export default NewList
