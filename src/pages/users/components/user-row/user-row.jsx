import { Icon } from '../../../../components/icon/icon.jsx';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TableRow } from '../table-row/table-row.jsx';

const UserRowContainer = ({
	                          className,
	                          login,
	                          registeredAt,
	                          roleId: userRoleId,
                          }) => {
	const roles = [{ id: 0, name: 'admin' }, {
		id: 1,
		name: 'moderator',
	}, { id: 2, name: 'user' }];
	
	const dispatch = useDispatch();
	
	return (
		<div
			className={className}
		>
			<TableRow className="user-data">
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
			</TableRow>
			<Icon
				className="delete-user-icon"
				name="trash-o"
				onClick={() => dispatch(/* TODO */)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	width: 100%;
	align-items: center;
	
	& .user-data {
		border: 1px solid #e4e4e4;
		padding-block: 10px;
	}
	
	& .delete-user-icon {
		margin-inline: 12px;
	}
	
	& select {
		border-radius: 8px;
		font-size: 25px;
	}
`;
