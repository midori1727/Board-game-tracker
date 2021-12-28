import {GAME_LIST_ADD, GAME_LIST_REMOVE} from './types';


export const gameListAddAction = () => {
	return {
		type: "GAME_LIST_ADD",
		payload: {
			id: '',
			title: '',
			scenario: '',
			members: {member: '', points: ''},
			time: '',
			comment: ''
		}
	}
};

export const gameListRemoveAction = (id) => {
	return {
		type: "GAME_LIST_REMOVE",
		payload: {
			id,
			title: '',
			scenario: '',
			members: {member: '', points: ''},
			time: '',
			comment: ''
		}
	}
};
