import React from 'react';
import NavBar from '../navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

function Layout(props) {
    return (
        <React.Fragment>
            <Container>
                <NavBar />
                <Row>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Layout;
