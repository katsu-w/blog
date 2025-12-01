import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/index.js';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	height: 100%;
	margin: 0 auto;
	background-color: #282828;
`

const Content = styled.div`
	padding-block: 120px;
`;

const H2 = styled.h2`
	text-align: center;
`;

function App() {

  return (
	  <AppColumn>
		  <Header />
		  <Content>
			  <H2>Контент</H2>
			  <Routes>
				  <Route path="/" element={<div style={{height: 1000}}>Главная</div>} />
				  <Route path="/login" element={<div>Авторизация</div>} />
				  <Route path="/register" element={<div>Регистрация</div>} />
				  <Route path="/users" element={<div>Пользователи</div>} />
				  <Route path="/post/" element={<div>Новая статья</div>} />
				  <Route path="/post/:postId" element={<div>Статья</div>} />
				  <Route path="*" element={<div>Ошибка</div>} />
			  </Routes>
			</Content>
		  <Footer />
	  </AppColumn>
  )
}

export default App
