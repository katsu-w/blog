import styled from 'styled-components';
import { H2 } from '../../components/UI/index.js';
import { Icon } from '../../components/icon/icon.jsx';
import { useDispatch } from 'react-redux';
import { ROLE } from '../../constants/index.js';

const UsersContainer = ({ className }) => {
	const users = [];
	const roles = [];
	
	const dispatch = useDispatch();
	
	const onRoleChange = (role) => {
	
	};
	
	return (
		<main className={className}>
			<H2>Пользователи</H2>
			<div>
				<div className="table-header">
					<div>Логин</div>
					<div>Дата регистрации</div>
					<div>Роль</div>
				</div>
				{users.map(({
					            id: userId,
					            login,
					            registeredAt,
					            roleId: userRoleId,
				            }) => (
					<div
						key={userId}
						className="table-row"
					>
						<div className="user-data">
							<div className="login-column">{login}</div>
							<div className="registered-at-column">{registeredAt}</div>
							<div className="role-column">
								<select
									name="role"
									value={userRoleId}
									// onChange={}
								>
									{roles.map(({ id: roleId, name: roleName }) => (
										<option key={roleId}>{roleName}</option>
									))}
								</select>
								<Icon
									name="floppy-o"
									onClick={() => dispatch(/* TODO */)}
								/>
							</div>
						</div>
						<Icon
							name="trash-o"
							onClick={() => dispatch(/* TODO */)}
						/>
					</div>
				))}
			</div>
		</main>
	);
};

export const Users = styled(UsersContainer)``;
