import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Body/Routes';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Routes />
			<Footer />
		</React.Fragment>
	);
}

export default App;
