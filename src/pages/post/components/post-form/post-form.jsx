import styled from 'styled-components';
import { Input } from '../../../../components/UI/index.js';
import { Icon } from '../../../../components/index.js';
import { SpecialPanel } from '../special-panel/special-panel.jsx';
import { useLayoutEffect, useRef, useState } from 'react';
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
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	
	const contentRef = useRef(null);
	
	useLayoutEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	
	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	
	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		
		dispatch(
			savePostAsync(requestServer, {
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
				id,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};
	
	return (
		<div className={className}>
			<div className="inputs">
				<Input
					onChange={onImageChange}
					value={imageUrlValue}
					placeholder="Изображение..."
				/>
				<Input
					onChange={onTitleChange}
					value={titleValue}
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
		min-height: 80px;
		padding: 8px;
		border: 1px solid #e4e4e4;
		border-radius: 16px;
	}
`;
