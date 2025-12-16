import styled from 'styled-components';
import { H2 } from '../../components/UI';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { Content } from '../../components/index.js';

const Table = styled.div`
	max-width: 77%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	font-size: 25px;
`;

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		Promise.all([
			requestServer('fetchUsers'),
			requestServer('fetchRoles'),
		]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer]);
	
	return (
		<main className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<Table>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({
						            id,
						            login,
						            registeredAt,
						            roleId,
					            }) => (
						<UserRow
							key={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</Table>
			</Content>
		</main>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
