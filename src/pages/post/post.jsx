import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { Error, PrivateContent } from '../../components';
import { useMatch, useParams } from 'react-router-dom';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors/index.js';
import { PostForm } from './components/post-form/post-form.jsx';
import { Loader } from '../../components/UI/index.js';
import { ROLE } from '../../constants/index.js';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	
	const isCreating = !!useMatch('/post/');
	const isEditing = !!useMatch('/post/:id/edit');
	
	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);
	
	useEffect(() => {
		if (isCreating) {
			return;
		}
		
		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			setError(postData.error);
		});
	}, [dispatch, params.id, requestServer, isCreating]);
	
	return error ?
		(
			<Error error={error} />
		)
		: (
			<main className={className}>
				{isCreating || isEditing ? (
					<PrivateContent
						access={[ROLE.ADMIN]}
						serverError={error}
					>
						<PostForm post={post} />
					</PrivateContent>
				) : (
					post.id ?
						(
							<>
								<PostContent post={post} />
								<Comments
									comments={post.comments}
									postId={post.id}
								/>
							</>
						)
						:
						(<Loader />)
				)}
			</main>
		);
};

export const Post = styled(PostContainer)`
	padding-inline: 80px;
	margin-block: 40px;
	font-size: 18px;
`;
