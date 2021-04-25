import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './App.styles';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<h1>Hello world</h1>
		</Router>
	);
}

export default App;
