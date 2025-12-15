import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/index.js';
import { Authorization, Registration } from './pages';
import { Users } from './pages/users/users.jsx';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	height: 100%;
	margin: 0 auto;
	background-color: #282828;
`;

const Page = styled.div`
	padding-block: 120px;
`;

function App() {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route
						path="/"
						element={<div style={{ height: 1000 }}>Главная</div>}
					/>
					<Route
						path="/login"
						element={<Authorization />}
					/>
					<Route
						path="/register"
						element={<Registration />}
					/>
					<Route
						path="/users"
						element={<Users />}
					/>
					<Route
						path="/post/"
						element={<div>Новая статья</div>}
					/>
					<Route
						path="/post/:postId"
						element={<div>Статья</div>}
					/>
					<Route
						path="*"
						element={<div>Ошибка</div>}
					/>
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
}

export default App;
