import { Icon } from '../../../../components/index.js';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TableRow } from '../table-row/table-row.jsx';
import { useState } from 'react';

const UserRowContainer = ({
	                          className,
	                          login,
	                          registeredAt,
	                          roleId: userRoleId,
	                          roles,
                          }) => {
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	
	const dispatch = useDispatch();
	
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	
	const isSaveButtonDisabled = selectedRoleId === userRoleId;
	
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
						{roles.map(({ id: roleId, name: roleName }) => (
							<option
								key={roleId}
								value={roleId}
							>{roleName}</option>
						))}
					</select>
					<div>
						<Icon
							disabled={isSaveButtonDisabled}
							name="floppy-o"
							onClick={() => dispatch(/* TODO */)}
						/>
					</div>
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
		font-size: 18px;
		padding: 4px;
	}
`;
