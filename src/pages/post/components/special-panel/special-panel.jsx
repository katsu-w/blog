import styled from 'styled-components';
import { Icon } from '../../../../components/index.js';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
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
