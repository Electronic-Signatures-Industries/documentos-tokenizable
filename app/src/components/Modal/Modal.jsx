import React from 'react';
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import i18n from 'i18next';

import { WindowOpener } from '../../windowOpener';
import Wallets from '../Wallets/Wallets'; 
import { 
	ReactComponent as BinanceChain 
} from '../../assets/icons/binance_chain.svg';
import { 
	ReactComponent as Metamask 
} from '../../assets/icons/metamask.svg';
import './modal.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const Modal = (props) => {
	
	const handleClose = () => {
		props.setOpen(false);
	};

	return (

		<Dialog
			open={props.open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
			id="container-modal"
		>
			<DialogTitle id="alert-dialog-slide-title">{i18n.t('connect_wallet')}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					<Wallets title={'Binance Chain Wallet'} icon={BinanceChain} >
					</Wallets>
					<Wallets title={'Xdv Wallet'} icon={Metamask}  >
					</Wallets>
					<WindowOpener
						url="http://localhost:3001/xdv-wallet"
						// bridge={this.xdvWalletResponse}
					>
                        Open Browser
					</WindowOpener>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<a href="#">{i18n.t('connect_learn_connect')}</a>
			</DialogActions>
		</Dialog>
	
	);
}

Modal.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
}

export default Modal;