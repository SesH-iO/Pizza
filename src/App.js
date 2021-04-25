import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './global.styles';
import Hero from './components/Hero/hero';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Hero />
		</Router>
	);
}

export default App;
