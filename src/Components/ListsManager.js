import React from 'react'

const ListsManager = ({lists, setSelectedList}) => {
  // zmień zawartość setSelectedList
  // aktualnie ustawiany jest jedynie tytułem wybranej listy
  // trzeba ustawić tam cały obiekt wybranej listy

   // dostaje wszystkie listy z nich trzeba wyciągnąć pojedyńczą listę

    return (
        <div id='ListsManager'>
                <select onChange={(e) => setSelectedList(lists.filter(item => (item.title === e.target.value)))}>
                  {lists.map(list => (
                      <option value={list.title} key={list.title}>
                          {list.title}
                      </option>
                  ))}
                </select>
        </div>
    )
}

export default ListsManager;
