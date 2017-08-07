import {combineReducers, createStore} from 'redux';

export function spendCoin() {
	return {
		type: "COIN_SPENT"
	}
}

export function setReel(reel, animate = false) {
	return {
		type: "SET_REEL",
		reel,
		animate
	}
}

export function setCanSpin(canSpin) {
	return {
		type: "SET_CAN_SPIN",
		canSpin
	}
}

export function pushSystemName() {
	return {
		type: "PUSH_SYSTEM_NAME",
	}
}

export function endGame() {
	return {
		type: 'END_GAME'
	}
}

export function restartGame() {
	return {
		type: "RESTART_GAME"
	}
}

const defaultGame = {
	coins: 6,
	canSpin: false,
	reel: [
		"INSERT", "A", "COIN"
	],
	systemName: '',
	systemNames: [],
	animateReels: true,
	gameOver: false
};

export function game(state = defaultGame, action) {
	switch (action.type) {
		case 'COIN_SPENT':
			const coins_left = state.coins - 1;
			return {
				...state, coins: coins_left, systemName: '', canSpin: true, reel: [
					"SPIN", "THE", "WHEEL"
				], animateReels: true
			};
		case 'SET_REEL':
			return {...state, reel: action.reel, animateReels: action.animate}
		case 'SET_CAN_SPIN':
			return {...state, canSpin: false}
		case 'PUSH_SYSTEM_NAME':
			const systemName = state.reel.join(' ');
			const systemNames = state.systemNames.slice();
			systemNames.push(systemName);
			return {...state, systemName: systemName, systemNames: systemNames}
		case 'END_GAME':
			return {...state, reel: ["GAME", "", "OVER"], gameOver: true }
		case 'RESTART_GAME':
			return defaultGame;
		default:
			return state;
	}
}


export function configureStore() {
	return createStore(combineReducers({game}));
}