import React from 'react';
import styled from 'styled-components';
import Datetime from './components/Datetime';
import Weather from './components/Weather';
import Todo from './components/Todo';

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding-bottom: 30px;
`;

const App = () => {
	return (
		<body style={{ backgroundColor: '#b0c4a9' }}>
			<Container>
				<Datetime />
				<Weather />
				<Todo />
			</Container>
		</body>
	);
};

export default App;
