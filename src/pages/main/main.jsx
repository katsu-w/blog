import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks/index.js';
import { Pagination, PostCard, Search } from './components/index.js';
import { PAGINATION_LIMIT } from '../../constants/index.js';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT, searchPhrase).then((posts) => {
			setPosts(posts.res.data);
			setLastPage(posts.res.last);
		});
	}, [requestServer, page, searchPhrase]);
	
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		setShouldSearch(!shouldSearch);
	};
	
	return (
		<main className={className}>
			<Search onChange={onSearch} />
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
