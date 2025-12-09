import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, H2 } from '../../components/UI';
import { Link, Navigate } from 'react-router-dom';
import { setUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors/index.js';
import { ROLE } from '../../constants/index.js';
import {
	AuthFormError,
} from '../../components/auth-form-error/auth-form-error.jsx';
import { useResetForm } from '../../hooks/index.js';

const regFormSchema = yup.object().shape({
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
	passcheck: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 10px 0;
`;

const RegistrationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});
	
	const [serverError, setServerError] = useState(null);
	
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	
	useResetForm(reset);
	
	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			
			dispatch(setUser(res));
		});
	};
	
	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMassage = formError || serverError;
	
	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}
	
	return (
		<main className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					name="login"
					type="text"
					placeholder="Логин..."
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					name="password"
					type="password"
					placeholder="Пароль..."
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<Input
					name="passcheck"
					type="password"
					placeholder="Повтор пароля..."
					{...register('passcheck', { onChange: () => setServerError(null) })}
				/>
				<Button
					type="submit"
					disabled={!!formError}
				>
					Зарегистрироваться
				</Button>
				{errorMassage && <AuthFormError>{errorMassage}</AuthFormError>}
				<StyledLink to="/login">Уже есть аккаунт?</StyledLink>
			</form>
		</main>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		width: 320px;
		font-size: 18px;
	}
`;
