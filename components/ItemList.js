import React, { Component } from 'react'
import { Panel, Row, Col, Image, Button, ButtonGroup, Grid } from 'react-bootstrap'


class ItemList extends Component {

	render() {

		let {item} = this.props;

		let imageStyle = {
			height: '170px',
			width: '100%',
			marginBottom: '7px'
		}

		let colStyle = {
			marginBottom: '15px'
		}

		return (
	      <Col style={colStyle} xs={3} md={3}>
	        <Image style={imageStyle} src='./images/default_thumb.png' thumbnail />
	        <p>{item.itemName}</p>
	        <ButtonGroup justified>
			    <Button bsStyle="primary" href="#">View</Button>
			    <Button bsStyle="success" href="#">{item.itemValue}</Button>
			 </ButtonGroup>
	      </Col>
		)  

	}

}

export default ItemList;
