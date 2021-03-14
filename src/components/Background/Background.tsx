import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './background.scss'

class Background extends React.Component<BackgroundProps, any> {
  render() {
    const Icon = this.props.icon

    return (
      <div className="container-background">
        <div className="container-title">
          <div className="box">
            <Icon className="icon" />
          </div>
          <span>{this.props.title}</span>
        </div>

        {this.props.children}
      </div>
    )
  }
}

type BackgroundProps = {
  children: any
  icon: any
  title: string
  isSide: boolean
}

const mapStateToProps = (state) => {
  return {
    isSide: state.side.isSide,
  }
}

export default connect(mapStateToProps, null)(Background)
