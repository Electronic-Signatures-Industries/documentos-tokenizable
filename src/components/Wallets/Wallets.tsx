import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import './wallets.scss'
class Wallets extends React.Component<WalletProps, any> {
  render() {
    const Icon = this.props.icon
    return (
      <Grid className="wallet-border" component="span">
        <Typography component="span">{this.props.title}</Typography>
        <Icon />
      </Grid>
    )
  }
}

type WalletProps = {
  type: string
  title: string
  icon: any
}

export default Wallets
