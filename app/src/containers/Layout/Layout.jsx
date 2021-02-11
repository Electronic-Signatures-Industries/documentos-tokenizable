import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col } from 'reactstrap';


import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import './layout.scss';

const Layout = ({children}) => {  
	const [isSlide, setIsSlide] = useState(false);
	return (
		<div >         
			<Header setIsSlide={setIsSlide} isSlide={isSlide} />
			<Row className="row-layout">
				<Col md={isSlide ? '2' : '3'} xs="4" className="col-sidebar">
					<SideBar isSlide={isSlide} />
				</Col>
				<Col xs="8" md={isSlide ? '10' : '9'}>
					<main>
						<Container>
							{children}
						</Container>
					</main>
					<div>
						<Container>
						</Container>
					</div>
				</Col>
			</Row>
			
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout
