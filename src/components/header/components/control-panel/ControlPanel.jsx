import styled from 'styled-components';
import { Icon } from '../../../icon/icon.jsx';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 20px;
`

const Button = styled.button`
	font-size: 24px;
	width: 100px;
	padding: 3px;
	border-radius: 16px;
`

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<Button>Войти</Button>
			</RightAligned>
			<RightAligned>
				<Icon name="backward"/>
				<Icon name="file-text-o"/>
				<Icon name="users"/>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
