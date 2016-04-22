import React from 'react'
import { render } from 'react-dom'
import Home from '../components/App'
import Item from '../components/Item'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'

let store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="/item" component={Item}>
			<Route path="item/:id" component={Item}/>
		</Route>
	</Router>
  </Provider>,document.getElementById('app')
)
