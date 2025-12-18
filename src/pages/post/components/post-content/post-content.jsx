import styled from 'styled-components';
import { H2 } from '../../../../components/UI/index.js';
import { Icon } from '../../../../components/index.js';

const PostContentContainer = ({
	                              className,
	                              post: {
		                              id,
		                              title,
		                              imageUrl,
		                              content,
		                              publishedAt,
	                              },
                              }) => {
	return (
		<div className={className}>
			<img
				src={imageUrl}
				width="350px"
				height="200px"
				loading="lazy"
				alt={title}
			/>
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						name="calendar-o"
						margin="0"
						size="20px"
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						name="pencil-square-o"
						margin="0"
						size="22px"
					/>
					<Icon
						name="trash-o"
						margin="0"
						size="22px"
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	
	& .special-panel {
		margin: -20px 0 20px;
		display: flex;
		justify-content: space-between;
	}
	
	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 20px;
		line-height: 18px;
	}
	
	& .buttons {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;
