import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
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

	const [acount, setAcount] = useState(false);
	const history = useHistory();

	const handleClose = () => {
		props.setOpen(false);
	};

	const handleWallet = () => {
		history.push({
			pathname: '/nueva-cuenta-xdv'
		});
		handleClose();
		setAcount(true)
	}

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
				<DialogContentText id="alert-dialog-slide-description" component="div">
					<Wallets title={'Binance Chain Wallet'} icon={BinanceChain} />
					{acount ? 
						<WindowOpener url={process.env.REACT_APP_XDV_WALLET_URL}>
							<Wallets title={'Xdv Wallet'} icon={Metamask} />
						</WindowOpener>
						: <Wallets title={'Xdv Wallet'} icon={Metamask} onClick={handleWallet} />}
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