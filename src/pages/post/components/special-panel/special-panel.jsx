import styled from 'styled-components';
import { Icon } from '../../../../components/index.js';
import {
	CLOSE_MODAL,
	openModal,
	removePostAsync,
} from '../../../../actions/index.js';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks/index.js';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({
	                               className,
	                               postId,
	                               publishedAt,
	                               editButton,
                               }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	
	const onPostRemove = (postId) => {
		dispatch(
			openModal({
				heading: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, postId)).then(() => navigate('/'));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					name="calendar-o"
					margin="0"
					size="20px"
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					name="trash-o"
					margin="0"
					size="22px"
					onClick={() => onPostRemove(postId)}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	display: flex;
	justify-content: space-between;
	
	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 20px;
		line-height: 18px;
	}
	
	& .buttons {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`;
