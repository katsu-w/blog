import styled from 'styled-components';

const LoaderContainer = ({ className }) => (
	<div className={className}></div>
);

export const Loader = styled(LoaderContainer)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	border: 3px solid #e4e4e4;
	border-top-color: #6a1baf;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	
	animation: spin 1s ease-in-out infinite;
	
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
