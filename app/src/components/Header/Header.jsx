import React from 'react';
import i18n from 'i18next';

import './header.scss';

const Header = () => {
	return (
		<header id="main-header" className="main-header div-header">
			{i18n.t('header_title')}
		</header>
	)
    
}

export default Header;
