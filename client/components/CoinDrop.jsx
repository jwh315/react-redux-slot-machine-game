import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../helpers/ItemTypes';

const dropTarget = {
	drop() {
		return { name: 'CoinDrop' };
	},
};


function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	};
}

class CoinDrop extends React.Component {
	render () {
		const { connectDropTarget } = this.props;
		return connectDropTarget(
			(
				<div id="coin-drop" />
			)
		);

	}
}

const mapStateToProps = state => state;

CoinDrop = DropTarget(ItemTypes.QUARTER, dropTarget, collect)(CoinDrop);
CoinDrop = connect(mapStateToProps, null)(CoinDrop)

export default CoinDrop;
