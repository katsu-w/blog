import styled from 'styled-components';
import { H2 } from '../../components/UI';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useParams } from 'react-router-dom';
import { loadPostAsync } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors/index.js';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	
	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer]);
	
	return (
		<main className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} />
		</main>
	);
};

export const Post = styled(PostContainer)`
	display: flex;
	flex-direction: column;
`;
