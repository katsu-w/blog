import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {
	return (
		<input className={className} {...props} />
	);
};

export const Input = styled(InputContainer)`
	padding: 8px 16px;
	width: ${({ width = '100%' }) => width};
	border: 1px solid #e4e4e4;
	border-radius: 16px;
	font-size: 25px;
`;
