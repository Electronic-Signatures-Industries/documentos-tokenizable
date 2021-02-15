import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import i18n from 'i18next';

import ModalConect from '../Modal/Modal';
import './header.scss';

const Header = (props) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if(isMobile) {
			props.setIsSlide(!props.isSlide)
		}
	}, [isMobile]);

	const handleSide = () => {
		props.setIsSlide(!props.isSlide)
	}

	const handleClickOpen = () => {
		console.log('handleClickOpen')
		setOpen(true);
	};
	
	return (
		<div className="root">
			<AppBar position="static">
				<Toolbar>
					<IconButton 
						edge="start" 
						className="menuButton" 
						color="inherit" 
						aria-label="menu"
						onClick={handleSide}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className="title">
						{i18n.t('header_title')}
					</Typography>
					<Button 
						color="inherit" 
						className="btn-connect" 
						onClick={handleClickOpen}>{i18n.t('header_conect')}</Button>
				</Toolbar>
			</AppBar>
			<ModalConect setOpen={setOpen} open={open}  />
		</div>
	)
    
}

Header.propTypes = {
	setIsSlide: PropTypes.func.isRequired,
	isSlide: PropTypes.bool.isRequired
};


export default Header;
