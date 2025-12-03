import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {
	return (
		<input className={className} {...props} />
	);
};

export const Input = styled(InputContainer)`
  padding: 8px 16px;
	width: 350px;
	border: 1px solid #f1f1f1;
	border-radius: 16px;
	font-size: 25px;
`;
