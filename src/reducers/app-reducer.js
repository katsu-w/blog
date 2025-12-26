import { ACTION_TYPE } from '../actions/index.js';

const initialAppState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		heading: '',
		onConfirm: () => {
		},
		onCancel: () => {
		},
	},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return {
				...state,
				modal: {
					...initialAppState.modal,
				},
			};
		default:
			return state;
	}
};
