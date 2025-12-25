import { updatePost } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];
	
	const access = await sessions.access(hash, accessRoles);
	
	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	const updatedPost = await updatePost(newPostData);
	
	return {
		error: null,
		res: updatedPost,
	};
};
