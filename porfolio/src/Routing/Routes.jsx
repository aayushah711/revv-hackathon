import React from 'react';
import { Route } from 'react-router-dom';
import AddClient from "../Components/AddClient"

const Routes = () => {
	return (
		<div>
			<Route path="/" exact component={AddClient} />
		</div>
	)
};

export default Routes;