import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
};
