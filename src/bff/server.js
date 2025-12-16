import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
} from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchRoles,
	fetchUsers,
};
