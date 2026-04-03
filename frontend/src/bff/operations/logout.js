import { sessions } from '../sessions.js';

export const logout = async (userSession) => {
	await sessions.remove(userSession);
};
