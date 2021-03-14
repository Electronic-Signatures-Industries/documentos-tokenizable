import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import i18n from 'i18next'

import * as actions from '../../store/actions/index'
import ModalConect from '../Modal/Modal'
import './header.scss'

class Header extends React.Component<HeaderProps, any> {
  componentDidMount() {
    const [open, setOpen] = useState(false)
	this.setOpen = setOpen;
	
    useEffect(() => {
      if (isMobile) {
        this.props.setIsSlide(!this.props.isSlide)
      }
    }, [isMobile])
  }

  handleSide = () => {
    this.props.onActive(!this.props.isSlide)
    this.props.setIsSlide(!this.props.isSlide)
  }

  handleClickOpen = () => {
    this.setOpen(true)
  }

  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
              onClick={this.handleSide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              {i18n.t('header_title')}
            </Typography>
            <Button
              color="inherit"
              className="btn-connect"
              onClick={this.handleClickOpen}
            >
              {i18n.t('header_conect')}
            </Button>
          </Toolbar>
        </AppBar>
        <ModalConect setOpen={setOpen} open={open} />
      </div>
    )
  }
}

type HeaderProps = {
  setIsSlide: (a: boolean) => {}
  isSlide: boolean
  onActive: any
}

const mapDispatchToProps = (dispatch) => {
  return {
    onActive: (type, data) => dispatch(actions.active(type, data)),
  }
}

export default connect(null, mapDispatchToProps)(Header)
