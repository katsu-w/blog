import styled from 'styled-components';
import { Input } from '../../../../components/UI/index.js';
import { Icon } from '../../../../components/index.js';
import { SpecialPanel } from '../special-panel/special-panel.jsx';
import { useRef } from 'react';
import { sanitizeContent } from './utils/index.js';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../actions/index.js';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks/index.js';

const PostFormContainer = ({
	                           className,
	                           post: {
		                           id,
		                           title,
		                           imageUrl,
		                           content,
		                           publishedAt,
	                           },
                           }) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	
	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		
		dispatch(
			savePostAsync(requestServer, {
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
				id: id,
			}),
		).then(() => navigate(`/post/${id}`));
	};
	
	return (
		<div className={className}>
			<div className="inputs">
				<Input
					ref={imageRef}
					defaultValue={imageUrl}
					placeholder="Изображение..."
				/>
				<Input
					ref={titleRef}
					defaultValue={title}
					placeholder="Заголовок..."
				/>
			</div>
			<SpecialPanel
				postId={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={<Icon
					name="floppy-o"
					margin="0"
					size="22px"
					onClick={onSave}
				/>}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	
	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	
	.post-text {
		white-space: pre-line;
	}
`;
