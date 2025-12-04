import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../components/UI';
import { Link } from 'react-router-dom';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин.')
		.matches(
			/^[a-zA-Z0-9]+$/,
			'Неверно заполнен логин. Допустимые символы - буквы и цифры.',
		)
		.min(3, 'Неверно заполнен логин. Минимальное количество символов - 3.')
		.max(15, 'Неверно заполнен логин. Максимальное количество символов - 15.'),
	password: yup
		.string()
		.required('Введите пароль.')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допустимые символы - буквы, цифры и знаки "%", "#".',
		)
		.min(6, 'Неверно заполнен пароль. Минимальное количество символов - 6.')
		.max(30, 'Неверно заполнен пароль. Максимальное количество символов - 30.'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 10px 0;
	font-size: 18px;
`;

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState('');

	const onSubmit = async ({ login, password }) => {
		await server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
			}
			console.log(res);
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMassage = formError || serverError;

	return (
		<main className={className}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input name="login" type="text" placeholder="Логин..." {...register('login')} />
				<Input
					name="password"
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<Button type="submit" disabled={!!formError}>Авторизоваться</Button>
				{errorMassage && <div>{errorMassage}</div>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</main>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		width: 320px;
	}
`;
