import styled from 'styled-components';

const PostCardContainer = ({
	                           className,
	                           id,
	                           title,
	                           publishedAt,
	                           commentsCount,
                           }) => {
	return (
		<div className={className}>
			{id}.{title} - {publishedAt} - {commentsCount}
		</div>
	);
};

export const PostCard = styled(PostCardContainer)``;
