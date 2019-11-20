import React, { Component } from 'react'
import Link from './Link'
import { VisibilityFilters } from "../store/actions";
import '../index.css'
const LinkList = ({active}) => {
  return(
    <div style={{margin: '10px'}}>
      Show: &nbsp;
      <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
      <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
      <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    </div>
  )
}


export default LinkList
