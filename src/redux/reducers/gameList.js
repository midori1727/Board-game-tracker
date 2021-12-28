import {GAME_LIST_ADD, GAME_LIST_REMOVE} from '../actions/types';

const initialState = {
	gameLists: [
		{
			id: '',
			title: '',
			scenario: '',
			members: {member: '', points: ''},
			time: '',
			comment: ''
		}
	]

}

const gameList = (state = initialState, action) => {
	switch (action.type){
		case GAME_LIST_ADD:
			return {
				...state,
				...action.payload
			}
		case GAME_LIST_REMOVE:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
};

export default gameList;