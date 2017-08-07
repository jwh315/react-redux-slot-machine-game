import React from 'react';
import {connect} from 'react-redux';
import Name from "./Name";

class Names extends React.Component {
	render() {
		let names = null;

		if (this.props.game.systemNames.length) {
			names = this.props.game.systemNames.map((n, i) => (<Name key={i} name={n}/>));
		}

		return (
			<div id="names-container">
				<h3>Names:</h3>
				<hr/>
				<table>
					<tbody>
						{names}
					</tbody>
				</table>
			</div>
		)
	}
}

export default connect(state => state, null)(Names);