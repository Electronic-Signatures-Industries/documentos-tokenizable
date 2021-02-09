import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import i18n from 'i18next';

import './sideBar.scss';

const SideBar = (props) => {
	const { isSlide } = props 
	const slide = isSlide ? 'slide' : '';
	const pathname = location.pathname;
	return (
		<div 
			className={`${slide} container-sidebar`}>
			<ul>
				<NavLink to='/' >
					<li className={slide ? 'select-list' : ''}>
						<div className={pathname === '/' ?  'selected' : '' }>
						</div>
						<Home className="icon-color" /> 
						{!slide ? 
							<span>{i18n.t('sidebar_home')}</span> 
							: null
						}
					</li>
				</NavLink>
				<NavLink to='/provider'>
					<li className={slide ? 'select-list' : ''}>
						<div className={pathname === '/provider' ?  'selected' : '' }>
						</div>
						<GroupIcon className="icon-color" /> 
						{!slide ? 
							<span>{i18n.t('sidebar_provider')}</span> 
							: null
						}
					</li>
				</NavLink>
				<NavLink to='/request'>
					<li className={slide ? 'select-list' : ''}>
						<div className={pathname === '/request' ?  'selected' : '' }>
						</div>
						<AssignmentIcon className="icon-color" /> 
						{!slide ? 
							<span>{i18n.t('sidebar_request')}</span> 
							: null
						}
					</li>
				</NavLink>
			</ul>

		</div>
	)
}

SideBar.propTypes = {
	isSlide: PropTypes.bool.isRequired
};

export default SideBar;