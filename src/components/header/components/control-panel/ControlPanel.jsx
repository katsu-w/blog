import styled from 'styled-components';
import { Icon } from '../../../icon/icon.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../UI/index.js';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 20px;
`;

const GoBackButton = styled.button`
	&:hover {
		cursor: pointer;
	}
	border: none;
	background-color: transparent;
	color: inherit;
	padding: 0;
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<Link to="/login">
					<Button width="100px">Войти</Button>
				</Link>
			</RightAligned>
			<RightAligned>
				<GoBackButton onClick={() => navigate(-1)}>
					<Icon name="backward" />
				</GoBackButton>
				<Link to="post">
					<Icon name="file-text-o" />
				</Link>
				<Link to="/users">
					<Icon name="users" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
