import { createComment, getComments, getPost, getUsers } from '../api/index.js';
import { ROLE } from '../constants/index.js';
import { sessions } from '../sessions.js';

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
	
	const comments = await getComments(postId);
	
	const users = await getUsers();
	
	const commentsWithAuthor = comments.map((comment) => {
		const author = users.find(({ id }) => id === comment.authorId);
		
		return {
			...comment,
			author: author?.login,
		};
	});
	
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
