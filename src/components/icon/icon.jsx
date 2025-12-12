import styled from 'styled-components';

const IconContainer = ({ className, name }) => (
	<div className={className}>
		<i
			className={`fa fa-${name}`}
			aria-hidden="true"
		/>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '30px' }) => size};
	margin: ${({ margin = 'auto' }) => margin};
	padding: ${({ padding = '0' }) => padding};
`;
