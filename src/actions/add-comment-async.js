import { setPostData } from './set-post-data.js';

export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
	console.log('ui', userId, 'pi', postId, 'content', content);
	requestServer('addComment', userId, postId, content).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
