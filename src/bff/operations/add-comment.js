import { createComment, getPost } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';
import { getPostCommentsWithAuthor } from '../utils/index.js';

export const addComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
	
	const access = await sessions.access(hash, accessRoles);
	
	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	await createComment(userId, postId, content);
	
	const post = await getPost(postId);
	
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);
	
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
