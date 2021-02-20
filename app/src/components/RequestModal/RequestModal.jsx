import React from 'react';
import PropTypes from 'prop-types'
import {Row, Col} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/TextField';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import i18n from 'i18next';

import './RequestModal.scss';


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const RequestModal = (props) => {
	
	const handleClose = () => {
		props.setOpen(false);
	};

	return (
		<Dialog
			id="container-request-modal"
			open={props.open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle id="alert-dialog-slide-title">{i18n.t('request_send_request')}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					<FormControl className="formControl" fullWidth>
						<Row>
							<Col md="12" className="col">
								<InputLabel id="request-send-to">{i18n.t('request_send_to')}</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select" fullWidth>
									<MenuItem value={10}>Ten</MenuItem>
								</Select>
							</Col>
							<Col md="12" className="col">
								<TextField 
									id="standard-basic" 
									label={i18n.t('request_name')} 
									fullWidth 
								/>
							</Col>
							<Col md="12" className="col">
								<TextField 
									id="standard-basic" 
									label={i18n.t('request_last_name')} 
									fullWidth 
								/>
							</Col>
							<Col md="12" className="col">
								<TextField 
									id="standard-basic" 
									label={i18n.t('request_email')} 
									fullWidth 
								/>
							</Col>
							<Col md="12" className="col">
								<TextField 
									id="standard-basic" 
									label={i18n.t('request_description')} 
									fullWidth 
								/>
							</Col>
							<Col md="12" className="col">
								<Input id="assets" name="assets" type="file" inputProps={{ multiple: true }} />
							</Col>
						</Row>
					</FormControl>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				{/* <a href="#">{i18n.t('connect_learn_connect')}</a> */}
			</DialogActions>
		</Dialog>
	
	);
}

RequestModal.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
}

export default RequestModal;