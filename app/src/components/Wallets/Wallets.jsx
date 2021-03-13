import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BscConnector } from '@binance-chain/bsc-connector'


import './wallets.scss';

const Wallets = (props) => {

	const connect = (type) => {
		if(type === 'binance'){
			
		}
		else{
			
		}
		console.log('connected')
	}

	const Icon = props.icon;
	return (
		<Grid className="wallet-border" component="span">
			<Typography component="span" onClick={() => { connect(props.type) } } >{props.title}</Typography>
			<Icon />
		</Grid>
	)
}

Wallets.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object.isRequired,
	type: PropTypes.string
}

export default Wallets;