import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postActionCreators } from 'actions/posts'

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
    const { posts } = this.props
    console.log('posts:', posts)

    const postEls = Object.keys(posts).map((key, index) => {
      return (
        <li key={posts[key].id}>
          <h2>
            {posts[key].title}
          </h2>
          <p>
            {posts[key].excerpt}
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
    posts: state.posts.store,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
