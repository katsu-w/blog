import styled from 'styled-components';
import { Icon } from '../../../icon/icon.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../UI/index.js';
import { ROLE } from '../../../../constants/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
`;

const ButtonIcon = styled.button`
	&:hover {
		cursor: pointer;
	}
	
	border: none;
	background-color: transparent;
	color: inherit;
	padding: 0;
`;

const UserName = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	
	const dispatch = useDispatch();
	
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	
	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};
	
	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Link to="/login">
						<Button width="100px">Войти</Button>
					</Link>
				) : (
					<>
						<UserName>{login}</UserName>
						<ButtonIcon onClick={onLogout}>
							<Icon name="sign-out" />
						</ButtonIcon>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<ButtonIcon onClick={() => navigate(-1)}>
					<Icon name="backward" />
				</ButtonIcon>
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
