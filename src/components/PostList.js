import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import Loading from './Loading'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postActionCreators } from 'actions/posts'

import DataState from 'common/dataState'

class PostList extends React.Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    getAllItems: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getAllItems()
  }

  componentDidMount() {
    console.log('mounted:', this.props)
  }

  render() {
    const { posts, allState } = this.props

    if (posts.allState === DataState.Loading || posts.allState === null) {
      return <Loading />
    }

    const postEls = Object.keys(posts.store).map((key, index) => {
      return (
        <li key={posts.store[key].id}>
          <h2>
            {posts.store[key].title}
          </h2>
          <p>
            {posts.store[key].excerpt}
          </p>
        </li>
      )
    })

    return (
      <div>
        <h1>This is the News list</h1>
        <ul>
          {postEls}
        </ul>
      </div>
    )
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
