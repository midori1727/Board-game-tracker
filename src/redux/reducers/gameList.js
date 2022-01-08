import {GAME_LIST_ADD, GAME_LIST_REMOVE} from '../actions/types';

const initialState = {
	gameLists: []
}

const gameList = (state = initialState, action) => {
	switch (action.type){
		case GAME_LIST_ADD:
			// return [ 
			// 	...state, 
			// 	action.payload 
			// ]
			return {
                ...state,
                gameLists: [...state.gameLists, action.payload]
            }
			
		case GAME_LIST_REMOVE:
			const newState = state.gameLists.filter(game => game.id !== action.payload.id );
			return {
				gameLists: newState
            }
		
		default:
			return state
	}
};

export default gameList;