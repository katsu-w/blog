import styled from 'styled-components';
import { Logo } from './components/index.js';
import { ControlPanel } from './components/control-panel/ControlPanel.jsx';

const Description = styled.div`
	font-style: italic;
	font-size: 25px;
`;

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<Description>
				Веб-технологии<br />
				Написание кода<br />
				Разбор ошибок
			</Description>
			<ControlPanel />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	height: 120px;
	padding: 18px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	box-shadow: 0 -7px 12px 9px rgba(74, 58, 94, 1);
	background-color: #282828;
`
