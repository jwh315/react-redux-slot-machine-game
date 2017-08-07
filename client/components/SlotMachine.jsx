import React from 'react';
import {connect} from 'react-redux';
import {setReel, pushSystemName, endGame, restartGame} from "../redux/game";
import MlmWords from "../helpers/helpers";
import Reel from "./Reel";
import Handle from "./Handle";
import CoinDrop from "./CoinDrop";

class SlotMachine extends React.Component {
	constructor(props) {
		super(props);

		this.spin = this.spin.bind(this);
		this.resetWheel = this.resetWheel.bind(this);
		this.restart = this.restart.bind(this);

		this.state = {
			systemName: "",
			counter: 0
		};

		this.counter = 0;

		this.mlmWords = new MlmWords();
	}

	resetWheel() {
		if (this.props.game.coins > 0) {
			this.props.setReel(["INSERT", "A", "COIN"], true);
		} else {
			this.props.endGame();
		}

	}

	restart() {
		this.props.restartGame();
	}

	spin() {
		if (this.state.counter >= 50) {
			var counter = 0;
			var change = false;

			this.props.pushSystemName();
			setTimeout(this.resetWheel.bind(this), 1000);
		} else {

			this.props.setReel([this.mlmWords.get(), this.mlmWords.get(), this.mlmWords.get()]);

			var counter = this.state.counter + 1;
			var change = true;
		}

		this.setState({
			counter
		});

		if (change) {
			setTimeout(this.spin.bind(this), 100);
		}
	}

	render() {
		var systemName = this.props.game.systemName
			? <h2 className="animated flash shake swing">{this.props.game.systemName}</h2>
			: null;

		var display = this.props.game.gameOver ? (<div id="restart" onClick={this.restart}>Restart</div>) : systemName;
		return (
			<div id="slot-machine-container">
				<div id="slot-machine">
					<h1>System Name Picker</h1>
					<CoinDrop/>
					<div id="real-container">
						<Reel word={this.props.game.reel[0]}/>
						<Reel word={this.props.game.reel[1]}/>
						<Reel word={this.props.game.reel[2]}/>
					</div>
					<div id="bottom-panel">
						{display}
					</div>
					<Handle onClick={this.spin}/>
				</div>
				<div id="base"/>
			</div>
		);
	}
}

export default connect(state => state, {setReel, pushSystemName, endGame, restartGame})(SlotMachine);
