import { H2 } from '../UI';
import styled from 'styled-components';
import { PROP_TYPE } from '../../constants/index.js';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	background-color: #282828;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	);

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
