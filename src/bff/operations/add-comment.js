import { createComment, getComments, getPost } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';

export const addComment = async (userSession, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
	
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	await createComment(userId, postId, content);
	
	const post = await getPost(postId);
	const comments = await getComments(postId);
	
	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
