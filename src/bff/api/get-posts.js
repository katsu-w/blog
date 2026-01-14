import { transformPost } from '../transformers/index.js';

export const getPosts = (page, limit, searchPhrase) =>
	fetch(`http://localhost:3000/posts?title=${searchPhrase}&_page=${page}&_per_page=${limit}`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => {
			
			if (loadedPosts) {
				return {
					data: loadedPosts.data.map(transformPost),
					last: loadedPosts.last,
				};
			}
		});
