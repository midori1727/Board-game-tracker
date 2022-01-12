// import {GAME_LIST_ADD, GAME_LIST_REMOVE, GAME_LIST_EDIT} from './types';

export const gameListAddAction = (gameData) => {
	return {
		type: "GAME_LIST_ADD",
		payload: {
			id: gameData.id,
			title: gameData.title,
			scenario: gameData.scenario,
			memberAndPoints: gameData.memberAndPoints,
			time: gameData.time,
			comment: gameData.comment,
			createdDate: gameData.createdDate
		}
	}
};

export const gameListRemoveAction = (gameData) => {
	return {
		type: "GAME_LIST_REMOVE",
		payload: {
			id: gameData.id
		}
	}
};

export const gameListEditAction = (gameData) => {
	return {
		type: "GAME_LIST_EDIT",
		payload: {
			id: gameData.id,
			title: gameData.title,
			scenario: gameData.scenario,
			memberAndPoints: gameData.memberAndPoints,
			time: gameData.time,
			comment: gameData.comment,
			createdDate: gameData.createdDate
		}
	}
};
