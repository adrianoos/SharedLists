import React from 'react'

const ListsManager = ({lists, setSelectedList}) => {

    return (
        <div id='ListsManager'>
                <select onChange={(e) => setSelectedList(e.target.value)}>
                  {lists.map(list => (
                      <option value={list.title}>
                          {list.title}
                      </option>
                  ))}
                </select>
        </div>
    )
}

export default ListsManager;
