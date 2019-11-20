import { setVisibleFilter } from '../actions'
import { connect } from 'react-redux'
import Link from '../components/Link'

const stateToProps = (state) => {
  return {
    filterVisible: state.filterVisible
  }
}

const dispatchToProps = (dispatch) => {
  return {
    handleSetFilterVisible(filterName) {
      dispatch(setVisibleFilter(filterName))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Link)

