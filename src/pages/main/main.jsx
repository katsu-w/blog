import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { useServerRequest } from '../../hooks/index.js';
import { Pagination, PostCard, Search } from './components/index.js';
import { PAGINATION_LIMIT } from '../../constants/index.js';
import { debounce, getLastPageFromLinks } from './utils/index.js';
import { H2, Loader } from '../../components/UI/index.js';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT, searchPhrase).then((posts) => {
			setPosts(posts.res.posts);
			setLastPage(getLastPageFromLinks(posts.res.links));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);
	
	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);
	
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};
	
	const onClick = () => setShouldSearch(!shouldSearch);
	
	return (
		<main className={className}>
			<Search
				onChange={onSearch}
				onClick={onClick}
			/>
			{
				posts.length ?
					(<>
						<div className="posts-layout">
							{posts.map(({
								            id,
								            title,
								            imageUrl,
								            publishedAt,
								            commentsCount,
							            }) =>
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
					</>)
					: (
						<div className="no-posts">
							<H2>Посты не найдены</H2>
							<Loader />
						</div>
					)
			}
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
	
	& .no-posts {
		padding-inline: 50px;
	}
`;
