import styled from 'styled-components';
import { Input } from '../../../../components/UI/index.js';
import { Icon } from '../../../../components/index.js';

const SearchButton = styled.button`
	padding: 0;
	border: none;
	background-color: transparent;
	border-radius: 0 16px 16px 0;
	cursor: pointer;
`;

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				onChange={onChange}
				radius="16px 0 0 16px"
				border="none"
			/>
			<SearchButton>
				<Icon
					name="search"
					margin="auto 12px"
					size="20px"
					color="#353535"
				/>
			</SearchButton>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	width: 340px;
	height: 40px;
	margin: 50px auto 0;
	border: 1px solid #e4e4e4;
	border-radius: 16px;
	background-color: #fff;
`;
