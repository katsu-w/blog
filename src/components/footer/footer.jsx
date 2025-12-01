import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('Moscow');
	const [temperature, setTemperature] = useState(0);
	const [weather, setWeather] = useState('Не удалось получить погоду');

	useEffect(() => {
		try {
			fetch(
				'https://api.openweathermap.org/data/2.5/weather?q=Novgorod&units=metric&lang=ru&appid=bb2d149c3b04f37339c17a32d4cd176a',
			)
				.then((res) => res.json())
				.then(({ name, main, weather }) => {
					setCity(name);
					setTemperature(Math.round(main.temp));
					setWeather(weather[0].description);
				});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<footer className={className}>
			<ContactBlock>
				<Link to="/">Блог веб-разработчика</Link>
				<a href="mailto:aleksandrzajcev01@gmail.com">aleksandrzajcev01@gmail.com</a>
			</ContactBlock>
			<InfoBlock>
				<div>
					{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} ℃, {weather}
				</div>
			</InfoBlock>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	position: fixed;
	bottom: 0;
	width: 1000px;
	padding: 18px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 7px 12px 9px rgba(74, 58, 94, 1);
	background-color: #282828;
`;
