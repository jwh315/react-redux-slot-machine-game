import React from 'react';

class Name extends React.Component {
	render() {
		return (
			<tr><td>{this.props.name}</td></tr>
		)
	}
}

export default Name;