import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Col } from 'react-bootstrap'
import actions from '../redux/actions'
import UserInfo from './UserInfo'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import PriceRange from './PriceRange'
import ItemLists from './ItemLists'
import CategoryLists from './CategoryLists'
import AdAgeLists from './AdAgeLists'

class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.fetchItemsAsync();
  }

  render() {
    return (
      <div>
        <AppHeader/>
          <Col xs={6} md={3}>
            <PriceRange/>
            <CategoryLists/>
            <AdAgeLists/>
          </Col>
          <Col xs={12} md={9}>
            <ItemLists actions={this.props.actions} items={this.props.items}/>
          </Col>
        <AppFooter/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {items: state.items}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
