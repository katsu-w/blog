import styled from 'styled-components';
import { Button } from '../UI/index.js';
import { useSelector } from 'react-redux';
import {
	selectModalHeading, selectModalIsOpen, selectModalOnCancel,
	selectModalOnConfirm,
} from '../../selectors/index.js';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const heading = useSelector(selectModalHeading);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	
	if (!isOpen) {
		return null;
	}
	
	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{heading}</h3>
				<div className="buttons">
					<Button
						width="120px"
						onClick={onConfirm}
					>Да</Button>
					<Button
						width="120px"
						onClick={onCancel}
					>Отмена</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	
	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}
	
	& .box {
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		margin: 0 auto;
		padding: 0 20px 20px;
		width: 400px;
		background-color: #282828;
		border: 2px solid #e4e4e4;
		border-radius: 16px;
		z-index: 30;
		text-align: center;
	}
	
	& .buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;
