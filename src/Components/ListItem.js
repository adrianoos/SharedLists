import React from 'react'

const ListItem = ({selectedList}) => {

console.log(selectedList)

    return (
        <div id='ListItem'>
          <div id='ListItemHeader'>
              <h1>{selectedList[0].title}</h1>
          </div>
          <div id='ListItemBody'>
           { selectedList[0].items.map( item =>
            <h2 key={item}>{item}</h2>)}
          </div>
        </div>
    )
}

export default ListItem;
