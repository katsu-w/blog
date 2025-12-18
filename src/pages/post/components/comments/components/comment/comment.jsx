import styled from 'styled-components';
import { Icon } from '../../../../../../components/index.js';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	console.log(content);
	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					<Icon
						name="user-circle-o"
						margin="0"
						size="22px"
					/>
					{author}
				</div>
				<div className="published-at">
					<Icon
						name="calendar-o"
						margin="0"
						size="20px"
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	flex-direction: column;
	
	& .information-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	& .author, .published-at {
		display: flex;
		align-items: center;
		gap: 5px;
		line-height: 18px;
	}
`;
