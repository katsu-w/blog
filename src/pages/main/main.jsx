import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks/index.js';
import { Pagination, PostCard } from './components/index.js';
import { PAGINATION_LIMIT } from '../../constants/index.js';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
			setPosts(posts.res.data);
			setLastPage(posts.res.last);
		});
	}, [requestServer, page]);
	
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
			{lastPage > 1 && (
				<Pagination
					page={page}
					setPage={setPage}
					lastPage={lastPage}
				/>
			)}
		</main>
	);
};

export const Main = styled(MainContainer)`
	& .posts-layout {
		display: flex;
		flex-wrap: wrap;
		gap: 57px;
		padding: 56px;
	}
`;
