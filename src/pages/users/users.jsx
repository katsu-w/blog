import styled from 'styled-components';
import { H2 } from '../../components/UI/index.js';
import { TableRow, UserRow } from './components/index.js';

const Table = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const UsersContainer = ({ className }) => {
	const users = [
		{
			id: '001',
			login: 'login',
			registeredAt: 'register',
			roleId: 2,
		},
	];
	
	const onRoleChange = (role) => {
	};
	
	return (
		<main className={className}>
			<H2>Пользователи</H2>
			<Table>
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="registered-at-column">Дата регистрации</div>
					<div className="role-column">Роль</div>
				</TableRow>
				{users.map(({ id, login, registeredAt, roleId }) => (
					<UserRow
						key={id}
						login={login}
						registeredAt={registeredAt}
						roleId={roleId}
					/>
				))}
			</Table>
		</main>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
