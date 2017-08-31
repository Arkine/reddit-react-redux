import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NewsActions from 'actions/news'

class NewsList extends React.Component {
  static propTypes = {
    getAllNews: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
    fetchingNewsStarted: PropTypes.bool,
  }

  componentWillMount() {
    this.props.getAllNews()
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
  return bindActionCreators(NewsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
