import styled from 'styled-components';
import { Icon } from '../../../../../../components/index.js';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	
	return (
		<div className={className}>
			<div className="comment">
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
			<Icon
				name="trash-o"
				margin="0"
				padding="8px 12px"
				size="20px"
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	align-items: center;
	background-color: #282828;
	
	& .comment {
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 100%;
		border: 1px #acacac solid;
		padding: 8px;
	}
	
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
	
	.comment-text {
		word-wrap: break-word;
		white-space: pre-line;
		word-break: break-word;
		hyphens: auto;
	}
`;
