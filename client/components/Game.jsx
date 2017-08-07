import React from 'react';
import { connect } from 'react-redux';
import DrapDropContext from '../helpers/DragAndDropContext';
import SlotMachine from "./SlotMachine";
import Quarter from "./Quarter";
import Names from "./Names";


class Game extends React.Component {
	render() {
		return (
			<div id="game">
				<Names />
				<SlotMachine/>

				<div id="quarters">
					{Array(this.props.game.coins).fill().map((q, i) => (<Quarter key={i}/>))}
				</div>
			</div>
		);
	}
}

Game = DrapDropContext(Game);
Game = connect(state => state, null)(Game);

export default Game;
