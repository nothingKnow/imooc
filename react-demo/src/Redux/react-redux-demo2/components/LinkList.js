import React from 'react'
import Link from '../container/filterVisible'
import { FilterVisibleList } from '../actions'

const LinkList = () => {
  return (
    <div>
      <Link filterName={FilterVisibleList.SHOW_ALL}>All</Link>
      <Link filterName={FilterVisibleList.SHOW_COMPLETED}>Completed</Link>
      <Link filterName={FilterVisibleList.SHOW_ACTIVE}>Active</Link>
    </div>
  )
}

export default LinkList
