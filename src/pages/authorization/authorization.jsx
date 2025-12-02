import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import styled from 'styled-components';

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
				<input name="login" type="text" placeholder="Логин..." {...register('login')} />
				<input
					name="password"
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<button type="submit" disabled={!!formError}>Войти</button>
				{errorMassage && <div>{errorMassage}</div>}
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
	}
`;
