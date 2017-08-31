import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NewsActions from 'actions/news'

class NewsList extends React.Component {
  static propTypes = {
    getAllNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired,
    fetchingNewsStarted: PropTypes.bool,
  }

  componentWillMount() {
    console.log('props', this.props)
    this.props.getAllNews()
  }

  render() {
    return <h1>This is the News list</h1>
  }
}

function mapStateToProps(state) {
  return {
    news: state.news,
    fetchingNewsStarted: state.fetchingNewsStarted,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
