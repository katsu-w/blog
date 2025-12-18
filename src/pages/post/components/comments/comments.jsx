import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '../../../../components/index.js';
import { Comment } from './components/index.js';

const CommentsContainer = ({ className, comments }) => {
	const [newComment, setNewComment] = useState('');
	
	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<Icon
					name="paper-plane-o"
					margin="0"
				/>
			</div>
			<div className="comments">
				{comments &&
					comments.map(({ id, author, content, publishedAt }) => (
						<Comment
							key={id}
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
		}
	}
`;
