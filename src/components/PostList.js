import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postActionCreators } from 'actions/posts'

class PostList extends React.Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    fetchingNewsStarted: PropTypes.bool,
  }

  componentWillMount() {
    // const { dispatch } = this.props;

    this.props.getAllItems()
  }

  componentDidMount() {
    console.log('mounted:', this.props)
  }

  render() {
    return <h1>This is the News list</h1>
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
