import styled from 'styled-components';

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
	width: ${({width = '100%'}) => width};
	padding: 3px;
	margin: 0;
	border: none;
	border-radius: 8px;
	transition: 0.2s ease;
	
	&:hover {
		transform: scale(1.03);
	}
`;
