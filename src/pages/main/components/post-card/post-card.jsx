import styled from 'styled-components';
import { Icon } from '../../../../components/index.js';
import { Link } from 'react-router-dom';

const PostCardContainer = ({
	                           className,
	                           id,
	                           title,
	                           imageUrl,
	                           publishedAt,
	                           commentsCount,
                           }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img
					src={imageUrl}
					alt={title}
				/>
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								name="calendar-o"
								margin="0"
								size="18px"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								name="comment-o"
								margin="0"
								size="18px"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	flex-basis: 29%;
	border: 2px solid #f1f1f1;
	border-radius: 16px;
	height: 100%;
	
	& img {
		display: block;
		width: 100%;
		min-height: 100%;
		border-radius: 16px 16px 0 0;
		aspect-ratio: 16 / 9;
	}
	
	& img, & h4 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	
	& .post-card-footer {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 12px;
		border-top: 2px solid #f1f1f1;
		
		& h4 {
			margin: 0;
			font-size: 18px;
		}
	}
	
	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	& .published-at, & .comments-count {
		display: flex;
		align-items: center;
		gap: 8px;
	}
`;
