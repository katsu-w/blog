export const deleteComment = async (commentId) =>
	await fetch(`http://localhost:3000/comments/${commentId}`, {
		method: 'DELETE',
	});

