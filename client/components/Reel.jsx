import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Trump from './Trump';

class Reel extends React.Component {
  constructor(props) {
    super(props);
    
    this.isTrump = this.isTrump.bind(this);
  }
  
  isTrump() {
    return this.props.word.toLowerCase() === 'trump';
  }
  
  
  render() {
    const word = this.isTrump() ? (<Trump/>) : (this.props.word) ;
    const classes = classNames({
        name: true,
        animated: this.props.game.animateReels,
        flash: this.props.game.animateReels,
    })
    return (
      <div className="reel">
        <hr />
        <span className={classes}>
          {word}
        </span>
      </div>
    );
  }
}

export default connect(state => state, null)(Reel);