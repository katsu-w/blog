import { transformPost } from '../transformers/index.js';

export const getPosts = (page, limit, searchPhrase) =>
	fetch(`http://localhost:3000/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
		.then((loadedPosts) => Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]))
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
			links,
		}));
