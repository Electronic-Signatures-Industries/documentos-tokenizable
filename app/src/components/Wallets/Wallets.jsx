import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './wallets.scss';

const Wallets = (props) => {
	const Icon = props.icon;
	return (
		<Grid className="wallet-border" component="span">
			<Typography component="span">{props.title}</Typography>
			<Icon />
		</Grid>
	)
}

Wallets.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object.isRequired
}

export default Wallets;