import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home'
import Provider from './containers/Provider/Provider'
import Request from './containers/Request/Request'
import XdvWallet from './containers/XdvWallet/XdvWallet';
import NewAccountXdv from './containers/NewAccountXdv/NewAccountXdv';


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
			<Route 
				path="/provider" 
				exact 
				render={props => 
					(
						<Layout {...props}>
							<Provider />
						</Layout>
					)} 
			/>
			<Route 
				path="/request" 
				exact 
				render={props => 
					(
						<Layout {...props}>
							<Request />
						</Layout>
					)} 
			/>

			<Route 
				path="/nueva-cuenta-xdv" 
				exact 
				render={props => 
					(
						<Layout {...props}>
							<NewAccountXdv />
						</Layout>
					)} 
			/>

			<Route 
				path="/xdv-wallet" 
				exact 
				component={XdvWallet}
			/>
		</Switch>
	);
};

export default AppRoute;