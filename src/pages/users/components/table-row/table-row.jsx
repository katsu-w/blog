import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => (
	<div className={className}>
		{children}
	</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	width: 100%;
	
	& div {
		padding-inline: 10px;
	}
	
	& .login-column {
		width: 172px;
	}
	
	& .registered-at-column {
		width: 156px;
	}
	
	& .role-column {
		width: auto;
		display: flex;
		gap: 16px;
	}
`;
