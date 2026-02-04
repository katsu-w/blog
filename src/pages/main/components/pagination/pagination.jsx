import styled from 'styled-components';
import { Button } from '../../../../components/UI/index.js';
import PropTypes from 'prop-types';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button
				disabled={page === 1}
				onClick={() => setPage(1)}
			>В начало</Button>
			<Button
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
			>Предыдущая</Button>
			<div className="current-page">Страница: {page}</div>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
			>Следующая</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(lastPage)}
			>В конец</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 20px;
	padding: 0 35px;
	gap: 10px;
	
	& .current-page {
		border: 1px solid #f1f1f1;
		width: 100%;
		height: 32px;
		text-align: center;
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
