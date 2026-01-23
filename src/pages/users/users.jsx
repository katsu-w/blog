import styled from 'styled-components';
import { H2 } from '../../components/UI';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { PrivateContent } from '../../components/index.js';
import { ROLE } from '../../constants/index.js';

const Table = styled.div`
	max-width: 77%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	font-size: 18px;
`;

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	
	const requestServer = useServerRequest();
	
	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList]);
	
	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};
	
	return (
		<main className={className}>
			<PrivateContent
				access={[ROLE.ADMIN]}
				serverError={errorMessage}
			>
				<H2>Пользователи</H2>
				{
					users.length > 0 ?
						<Table>
							<TableRow>
								<div className="login-column">Логин</div>
								<div className="registered-at-column">Дата регистрации</div>
								<div className="role-column">Роль</div>
							</TableRow>
							{users.map(({ id, login, registeredAt, roleId }) => (
								<UserRow
									key={id}
									id={id}
									login={login}
									roleId={roleId}
									registeredAt={registeredAt}
									roles={roles.filter(({ role_id }) => role_id !== ROLE.GUEST)}
									onUserRemove={() => onUserRemove(id)}
								/>
							))}
						</Table>
						:
						<div>Ошибка загрузки пользователей</div>
				}
			</PrivateContent>
		</main>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
