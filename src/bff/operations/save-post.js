import { createPost, updatePost } from '../api';
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
	
	const savedPost =
		newPostData.id === ''
			? await createPost(newPostData)
			: await updatePost(newPostData);
	
	return {
		error: null,
		res: savedPost,
	};
};
