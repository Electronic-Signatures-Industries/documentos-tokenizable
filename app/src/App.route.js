import React from 'react';
import { Route, Switch} from 'react-router-dom';

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
						</Layout>
					)} 
			/>
		</Switch>
	);
};

export default AppRoute;