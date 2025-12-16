import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	updateUserRole,
} from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
};
