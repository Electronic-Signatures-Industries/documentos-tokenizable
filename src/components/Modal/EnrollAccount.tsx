import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import i18n from 'i18next'

import Wallets from '../Wallets/Wallets'
import { ReactComponent as BinanceChain } from '../../assets/icons/binance_chain.svg'
import { ReactComponent as Metamask } from '../../assets/icons/metamask.svg'
import './modal.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

class EnrollAccount extends React.Component<EnrollAccountProps, any> {
  handleClose = () => {
    this.props.setOpen(false)
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="container-modal"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {i18n.t('connect_wallet')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Wallets
              type="binance"
              title={'Binance Chain Wallet'}
              icon={BinanceChain}
            ></Wallets>
            <Wallets
              type="metamask"
              title={'Metamask'}
              icon={Metamask}
            ></Wallets>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a href="#">{i18n.t('connect_learn_connect')}</a>
        </DialogActions>
      </Dialog>
    )
  }
}

type EnrollAccountProps = {
  setOpen: (a: boolean) => {},
  open: boolean,
}

export default EnrollAccount
