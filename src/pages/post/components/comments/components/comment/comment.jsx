import styled from 'styled-components';
import { Icon } from '../../../../../../components/index.js';
import { useDispatch } from 'react-redux';
import {
	CLOSE_MODAL, openModal,
	removeCommentAsync,
} from '../../../../../../actions/index.js';
import { useServerRequest } from '../../../../../../hooks/index.js';

const CommentContainer = ({
	                          className,
	                          postId,
	                          id,
	                          author,
	                          content,
	                          publishedAt,
                          }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	
	const onCommentRemove = (id) => {
		dispatch(openModal({
			heading: 'Удалить комментарий?',
			onConfirm: () => {
				dispatch(removeCommentAsync(requestServer, postId, id));
				dispatch(CLOSE_MODAL);
			},
			onCancel: () => dispatch(CLOSE_MODAL),
		}));
		
	};
	
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
				onClick={() => onCommentRemove(id)}
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
	
	& .author,
	.published-at {
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
