import { Icon } from '../../../../components/index.js';
import styled from 'styled-components';
import { TableRow } from '../table-row/table-row.jsx';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks/index.js';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../../constants/index.js';

const UserRowContainer = ({
	                          className,
	                          id,
	                          login,
	                          registeredAt,
	                          roleId: userRoleId,
	                          roles,
	                          onUserRemove,
                          }) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();
	
	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', { userId, newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};
	
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	
	const isSaveButtonDisabled = selectedRoleId === initialRoleId;
	
	return (
		<div className={className}>
			<TableRow className="user-data">
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select
						name="role"
						value={selectedRoleId}
						onChange={onRoleChange}
					>
						{roles.map(({ role_id: roleId, name: roleName }) => (
							<option
								key={roleId}
								value={roleId}
							>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave(id, selectedRoleId)}
						name="floppy-o"
					/>
				</div>
			</TableRow>
			<Icon
				padding="4px 12px"
				name="trash-o"
				onClick={onUserRemove}
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
		font-size: 18px;
		padding: 4px;
	}
`;

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
