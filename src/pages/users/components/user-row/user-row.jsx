import { Icon } from '../../../../components/index.js';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TableRow } from '../table-row/table-row.jsx';

const UserRowContainer = ({
	                          className,
	                          login,
	                          registeredAt,
	                          roleId: userRoleId,
	                          roles,
                          }) => {
	
	const dispatch = useDispatch();
	
	return (
		<div className={className}>
			<TableRow className="user-data">
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select
						name="role"
						value={userRoleId}
						// onChange={}
					>
						{roles.map(({ name: roleName }) => (
							<option key={roleName}>{roleName}</option>
						))}
					</select>
					<Icon
						name="floppy-o"
						onClick={() => dispatch(/* TODO */)}
					/>
				</div>
			</TableRow>
			<Icon
				padding="4px 12px"
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
		padding-block: 7px;
	}
	
	& select {
		width: 100%;
		border-radius: 8px;
		font-size: 25px;
		padding: 4px;
	}
`;
