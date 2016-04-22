import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Col } from 'react-bootstrap'
import actions from '../redux/actions'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

class Item extends Component {

  componentWillMount(){

    let {id} = this.props.location.query;
    this.props.actions.fetchItemAsync(id); 

  }

  render() {
    return (
      <div>
        <AppHeader/>
        <AppFooter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
