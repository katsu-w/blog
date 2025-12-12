import { sessions } from '../sessions.js';

export const logout = async (session) => {
	sessions.remove(session);
};
