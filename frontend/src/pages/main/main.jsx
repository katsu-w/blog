import styled from 'styled-components';
import {useEffect, useMemo, useState} from 'react';
import {Pagination, PostCard, Search} from './components/index.js';
import {PAGINATION_LIMIT} from '../../constants/index.js';
import {debounce} from './utils/index.js';
import {H2, Loader} from '../../components/UI/index.js';
import {request} from "../../utils/request.js";

const MainContainer = ({className}) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	
	useEffect(() => {
		request(`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`).then(
			({data: {posts, lastPage}}) => {
				setPosts(posts);
				setLastPage(lastPage);
			}
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);
	
	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);
	
	const onSearch = ({target}) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};
	
	const onClick = () => searchPhrase ? setShouldSearch(!shouldSearch) : null;
	
	return (
		<main className={className}>
			<div className="search-and-posts">
				<Search
					onChange={onSearch}
					onClick={onClick}
				/>
				{posts.length > 0 ? (
					<div className="posts-layout">
						{posts.map(({
							            id,
							            title,
							            imageUrl,
							            publishedAt,
							            comments,
						            }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-posts">
						<H2>Посты не найдены</H2>
						<Loader />
					</div>
				)}
			</div>
			{lastPage > 1 && <Pagination
				page={page}
				setPage={setPage}
				lastPage={lastPage}
			/>}
		</main>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	& .posts-layout {
		display: flex;
		flex-wrap: wrap;
		gap: 48px;
		padding: 32px 48px;
		min-height: 940px;
	}
	
	& .no-posts {
		padding-inline: 50px;
	}
`;
