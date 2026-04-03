import { deleteComment, getPost } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';
import { getPostCommentsWithAuthor } from '../utils/index.js';

export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
	
	const access = await sessions.access(hash, accessRoles);
	
	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}
	
	await deleteComment(id);
	
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
