import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks/index.js';
import { PostCard } from './components/index.js';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);
	
	return (
		<main className={className}>
			{posts.map(({ id, title, publishedAt, commentsCount }) => <PostCard
				key={id}
				id={id}
				title={title}
				publishedAt={publishedAt}
				commentsCount={commentsCount}
			/>)}
		</main>
	);
};

export const Main = styled(MainContainer)``;
