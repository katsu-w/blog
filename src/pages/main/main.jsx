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
			<div className="posts-layout">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) =>
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>)}
			</div>
		</main>
	);
};

export const Main = styled(MainContainer)`
	& .posts-layout {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 50px;
		padding: 56px;
	}
`;
