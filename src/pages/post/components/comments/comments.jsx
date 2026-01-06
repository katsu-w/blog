import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '../../../../components/index.js';
import { Comment } from './components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors/index.js';
import { useServerRequest } from '../../../../hooks/index.js';
import { addCommentAsync } from '../../../../actions/index.js';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	
	const onNewCommentAdd = (userId, postId, content) => {
		if (content.trim() !== '') {
			dispatch(addCommentAsync(requestServer, userId, postId, content));
		}
		
		setNewComment('');
	};
	
	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<Icon
					name="paper-plane-o"
					margin="0"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments &&
					comments.map(({ id, author, content, publishedAt }) => (
						<Comment
							key={id}
							postId={postId}
							id={id}
							author={author}
							content={content}
							publishedAt={publishedAt}
						/>
					))
				}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	
	& .new-comment {
		display: flex;
		gap: 5px;
		width: 100%;
		
		& textarea {
			width: 100%;
			height: 120px;
			resize: none;
			font-size: 18px;
			padding: 5px;
		}
	}
	
	& .comments {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
