import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	color: #000;
	font-size: 24px;
	width: ${({ width = '100%' }) => width};
	padding: 3px;
	margin: 0;
	border: none;
	border-radius: 8px;
	transition: 0.2s ease;
	
	&:hover {
		transform: scale(1.03);
		cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
	}
	
	&:disabled {
		color: #bababa;
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
