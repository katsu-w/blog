import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils/index.js';

export const fetchPosts = async (page, limit, searchPhrase) => {
	
	const [posts, comments] = await Promise.all([getPosts(page, limit, searchPhrase), getComments()]);
	
	return {
		error: null,
		res: {
			data: posts.data.map((post) => ({
				...post,
				commentsCount: getCommentsCount(comments, post.id),
			})),
			last: posts.last,
		},
	};
};
