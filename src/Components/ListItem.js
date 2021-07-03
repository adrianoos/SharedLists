import React from 'react'

const ListItem = ({selectedList}) => {
    return (
        <div id='ListItem'>
          <div id='ListItemHeader'>
              <h1>{selectedList}</h1>
          </div>
          <div id='ListItemBody'>
              <h2>ListItem Body</h2>
          </div>
        </div>
    )
}

export default ListItem;
