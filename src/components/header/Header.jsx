import styled from 'styled-components';
import { Logo } from './components/index.js';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	height: 120px;
	padding: 18px 40px;
	display: flex;
	align-items: center;
	width: 1000px;
	box-shadow: 0 -7px 8px 9px rgba(74, 58, 94, 1);
	background-color: #282828;
`
