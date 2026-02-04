import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRowContainer = ({ children, className }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	width: 100%;
	
	& .login-column,
	.registered-at-column,
	.role-column {
		padding-inline: 10px;
	}
	
	& .login-column {
		width: 180px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	& .registered-at-column {
		width: 230px;
	}
	
	& .role-column {
		width: 250px;
		display: flex;
		gap: 16px;
		padding-right: 16px;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
