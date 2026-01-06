import styled from 'styled-components';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useMatch, useParams } from 'react-router-dom';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors/index.js';
import { PostForm } from './components/post-form/post-form.jsx';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	
	const isCreating = useMatch('/post/');
	const isEditing = useMatch('/post/:id/edit');
	
	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);
	
	useEffect(() => {
		if (isCreating) {
			return;
		}
		
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer, isCreating]);
	
	return (
		<main className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments
						comments={post.comments}
						postId={post.id}
					/>
				</>
			)}
		</main>
	);
};

export const Post = styled(PostContainer)`
	padding-inline: 80px;
	margin-block: 40px;
	font-size: 18px;
`;
