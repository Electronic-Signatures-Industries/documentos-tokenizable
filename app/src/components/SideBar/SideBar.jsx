import React from 'react';
import PropTypes from 'prop-types';

import './sideBar.scss';

const SideBar = (props) => {
	const { isSlide } = props 
	const slide = isSlide ? 'slide' : '';
	return (
		<div 
			className={`${slide} container-sidebar`}>
			<ul>
				<li>
					Home
				</li>
			</ul>

		</div>
	)
}

SideBar.propTypes = {
	isSlide: PropTypes.bool.isRequired
};

export default SideBar;