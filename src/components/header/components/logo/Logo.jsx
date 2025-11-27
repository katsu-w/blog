import styled from 'styled-components';

const IconContainer = ({ className }) => (
	<div className={className}>
		<i className="fa fa-code" aria-hidden="true" />
	</div>
)

const Icon = styled(IconContainer)`
	font-size: 85px;
	margin-right: 15px;
`

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
		<div className={className}>
			<Icon />
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
`
