import { ACTION_TYPE } from '../actions/index.js';

const initialPostState = {
	id: '',
	title: '',
	imageUrl: 'https://sun9-61.userapi.com/s/v1/ig2/opJ8_sG2-e5yVctzLSOx7MTfSuMmz0KgmE-CU3pxipLa0ph5J4u1X02JQUIRzqMH54jIu1u9w3q5Tds20CJjXXiP.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,500x500&from=bu&cs=500x0',
	content: '',
	publishedAt: '',
	comments: [],
};

export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_POST_DATA:
			return initialPostState;
		default:
			return state;
	}
};
