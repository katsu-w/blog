import { deleteComment, deletePost, getComments } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';

export const removePost = async (hash, postId) => {
	const accessRoles = [ROLE.ADMIN];
	
	const access = await sessions.access(hash, accessRoles);
	
	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	await deletePost(postId);
	
	const comments = await getComments(postId);
	
	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));
	
	return {
		error: null,
		res: true,
	};
};
