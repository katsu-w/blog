import { getUser } from '../api';
import { sessions } from '../sessions.js';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);
	
	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		};
	}
	
	if (authPassword !== user.password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}
	
	const { id, login, role_id } = user;
	
	return {
		error: null,
		res: {
			id: id,
			login: login,
			roleId: role_id,
			session: sessions.create(user),
		},
	};
};
