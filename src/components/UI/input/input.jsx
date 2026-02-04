import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = ({ className, ...props }) => {
	return (
		<input className={className} {...props} />
	);
};

export const Input = styled(InputContainer)`
	padding: 8px 16px;
	width: ${({ width = '100%' }) => width};
	border: ${({ border = '1px solid #e4e4e4' }) => border};
	border-radius: ${({ radius = '16px' }) => radius};
	font-size: 25px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
