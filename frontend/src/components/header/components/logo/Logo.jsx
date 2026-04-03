import styled from 'styled-components';
import { Icon } from '../../../icon/icon.jsx';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
	font-size: 68px;
	font-weight: bold;
	line-height: 1;
`

const SmallText = styled.div`
	font-size: 25px;
	font-weight: bold;
`

const LogoContainer = ({ className}) => {
	return (
		<Link to="/" className={className}>
			<Icon name="code" size="85px" margin="0 10px 0 0" />
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</Link>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
`
