import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home'

import Layout from './containers/Layout/Layout';

const AppRoute = () => {
	return ( 
		<Switch>
			<Route 
				path="/" 
				exact 
				render={props => 
					(
						<Layout {...props}>
							<Home />
						</Layout>
					)} 
			/>
		</Switch>
	);
};

export default AppRoute;