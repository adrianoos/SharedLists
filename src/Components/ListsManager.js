import React, { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import NewList from './NewList';

const ListsManager = ({lists, setSelectedList}) => {

 const [ addList, setAddList ] = useState(false);

 const addNewList = () => {
     setAddList(!addList)
     setSelectedList('')
 }

    return (
        <div id='ListsManager'>
            <GrAddCircle onClick={() => (addNewList())}/>
                <select onChange={(e) => setSelectedList(lists.filter(item => (item.title === e.target.value)))}>
                  {lists.map(list => (
                      <option value={list.title} key={list.title}>
                          {list.title}
                      </option>
                  ))}
                </select>
                { addList ? <NewList setAddList={setAddList}/> : ''}
        </div>
    )
}

export default ListsManager;
