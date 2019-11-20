import React from 'react'
import {setVisibleFilter} from '../store/actions'
import { connect } from 'react-redux'

const Link = ({active, children, onClick}) => {
  return (
    <a
      href="#"
      style={{marginRight: '10px'}}
      className={active ? 'active': ''}
      onClick={onClick}
    >{children}</a>
  )
}


const stateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filterVisible
  }
}

const dispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibleFilter(ownProps.filter))
  }
})

export default connect(stateToProps, dispatchToProps)(Link)
