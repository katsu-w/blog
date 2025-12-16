import { setUserRole } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';

export const updateUserRole = async (userSession, {
	userId,
	newUserRoleId,
}) => {
	const accessRoles = [ROLE.ADMIN];
	
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	await setUserRole(userId, newUserRoleId);
	
	return {
		error: null,
		res: true,
	};
};
