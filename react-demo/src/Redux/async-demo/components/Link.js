import React from 'react'
const Link = ({children, filterName, filterVisible, handleSetFilterVisible}) => {
  return (
    <a
      href="#"
      style={{marginRight: '20px'}}
      onClick={() => handleSetFilterVisible(filterName)}
      className={filterVisible === filterName ? 'active': ''}
    >{children}</a>
  )
}


export default Link;
