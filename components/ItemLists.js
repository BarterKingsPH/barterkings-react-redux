import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'


class ItemList extends Component {

	render() {

		let itemsObj = this.props.items;
		
		if (itemsObj) {
			var items = this.props.items.map( (item) => {
				return <li key={item._id}>{item.itemName}</li>
			});
		}else{
			let items = []
		};

		return (
			<Panel header="Item List">
				{items}
			</Panel>
		)  

	}

}

export default ItemList;
