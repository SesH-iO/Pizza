import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './global.styles';
import Index from './pages';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Index />
		</Router>
	);
}

export default App;
