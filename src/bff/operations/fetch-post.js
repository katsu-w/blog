import { getComments, getPost, getUsers } from '../api';

export const fetchPost = async (postId) => {
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
