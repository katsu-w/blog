export const transformPost = (dbPost) => ({
	content: dbPost.content,
	id: dbPost.id,
	imageUrl: dbPost.image_url,
	publishedAt: dbPost.published_at,
	title: dbPost.title,
	comments: dbPost.comments,
});
