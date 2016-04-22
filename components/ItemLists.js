import React, { Component } from 'react'
import { Panel, Row, Grid, Col } from 'react-bootstrap'
import ItemList from './ItemList'



class ItemLists extends Component {

	render() {

		let {items} = this.props;
		
		if (items) {
			var itemsList = items.map( (item) => {
				return <ItemList key={item._id} item={item}/>;
			});
		}else{
			let itemsList = []
		};

		return (
			<Panel header="Item List">
				<Col md={12}>
					{itemsList}
				</Col>
			</Panel>
		)  

	}

}

export default ItemLists;
