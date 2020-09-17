import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Body from "./Components/Body/Body"
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
