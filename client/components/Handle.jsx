import React from 'react';
import { connect } from 'react-redux';
import { setCanSpin } from "../redux/game";

class Handle extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      clicked: ''
    }
  }
  
  handleClick() {
    if (this.props.game.canSpin) {
		this.setState({
			clicked: 'clicked'
		});

		this.props.onClick();
		this.props.setCanSpin(false);

		var self = this;

		setTimeout(() => self.setState({clicked:'released'}), 1000);
    } else {
      alert('Insert A Coin');
    }
  }
  
  render() {
    return (
      <div>
        <div id="handle-ball" className={this.state.clicked} onClick={this.handleClick} />
        <div id="handle" className={this.state.clicked} />
        <div id="handle-attachment" />
      </div>
    );
  }
}

export default connect(state => state, {setCanSpin})(Handle);