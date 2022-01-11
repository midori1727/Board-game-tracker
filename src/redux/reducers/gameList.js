import {GAME_LIST_ADD, GAME_LIST_REMOVE, GAME_LIST_EDIT} from '../actions/types';

const initialState = {
	gameLists: []
};

const gameList = (state = initialState, action) => {
	switch (action.type){
		case GAME_LIST_ADD:
			return {
                ...state,
                gameLists: [...state.gameLists, action.payload]
            }
			
		case GAME_LIST_REMOVE:
			const newState = state.gameLists.filter(game => game.id !== action.payload.id );
			return {
				gameLists: newState
            }

		case GAME_LIST_EDIT:
			const newEditState = state.gameLists.map(game => game.id === action.payload.id ? action.payload : game);
			return {
                gameLists: newEditState
			}
		
		default:
			return state
	}
};

export default gameList;