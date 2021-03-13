import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import AttachFile from '@material-ui/icons/AttachFile'
import IconButton from '@material-ui/core/IconButton'
import Clear from '@material-ui/icons/Clear'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/TextField'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import { Row, Col } from 'reactstrap'
import i18n from 'i18next'

import './RequestModal.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

class RequestModal extends React.Component<RequestModalProps, any> {
  render() {
    const dialogContentText = useRef()

    const [file, setFile] = useState({})

    const handleClose = () => {
      this.props.setOpen(false)
    }

    const uploadFile = (file) => {
      setFile(file.target.files[0])
    }

    const cleanFile = () => {
      setFile({})
    }

    return (
      <Dialog
        id="container-request-modal"
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {i18n.t('request_send_request')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            component="div"
            ref={dialogContentText}
          >
            <FormControl className="formControl" fullWidth>
              <Row>
                <Col md="12" className="col">
                  <InputLabel id="request-send-to">
                    {i18n.t('request_send_to')}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                  >
                    <MenuItem value={'10'}>Ten</MenuItem>
                  </Select>
                </Col>
                <Col md="12" className="col">
                  <TextField label={i18n.t('request_name')} fullWidth />
                </Col>
                <Col md="12" className="col">
                  <TextField label={i18n.t('request_last_name')} fullWidth />
                </Col>
                <Col md="12" className="col">
                  <TextField label={i18n.t('request_email')} fullWidth />
                </Col>
                <Col md="12" className="col">
                  <TextField label={i18n.t('request_description')} fullWidth />
                </Col>
                <Col md="12" className="col">
                  <label className={file.name ? 'file-color' : ''}>
                    {i18n.t('request_file')}
                  </label>
                  <Input
                    id="upload-file"
                    name="upload-file"
                    type="file"
                    className="upload-file"
                    onChange={uploadFile}
                  />
                  <br />
                  <Row>
                    <Col md="2">
                      <label htmlFor="upload-file">
                        <AttachFile className={file.name ? 'file-color' : ''} />
                      </label>
                    </Col>
                    <Col md="8">
                      <div
                        className={file.name ? 'file-chip file-ellipsis' : ''}
                      >
                        <span>{file.name}</span>
                      </div>
                    </Col>
                    <Col md="2">
                      {file.name ? (
                        <IconButton
                          className="file-color"
                          onClick={cleanFile}
                          color="primary"
                          aria-label=""
                        >
                          <Clear />
                        </IconButton>
                      ) : null}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleClickOpen}
            className="btn-modal"
          >
            {i18n.t('request_upload_file')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleClickOpen}
            className="btn-modal"
          >
            {i18n.t('request_publish')}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

type RequestModalProps = {
  setOpen: (b: boolean) => {}
  open: boolean
}

export default RequestModal
