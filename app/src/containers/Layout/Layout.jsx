import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col } from 'reactstrap';


import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import './layout.scss';

const Layout = ({children}) => {  
	return (
		<div >         
			<Header />
			<Row className="row-layout">
				<Col md="2">
					<SideBar />
				</Col>
				<Col md="8">
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
