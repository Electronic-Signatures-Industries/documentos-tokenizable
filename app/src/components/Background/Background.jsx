import React from 'react';
import PropTypes from 'prop-types';

import './background.scss';

const Background = (props) => {
	const Icon = props.icon;
	return (
		<div className="container-background">
			<div className="box"><Icon className="icon" /></div>
			{props.children}
		</div>
	)
}

Background.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.object.isRequired,
};

export default Background;