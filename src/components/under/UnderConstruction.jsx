import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import './UnderConstruction.css';

export class UnderConstructionClass extends React.Component {
    render () {
	const { t } = this.props;
	return (
	    <Container>
		<Row>
		    <Col>
			<div className="parent">
			    <div className="gear">
				<div className="center"></div>
				<div className="tooth"></div>
				<div className="tooth"></div>
				<div className="tooth"></div>
				<div className="tooth"></div>
			    </div>  
			</div>
		    </Col>
		    <Col className="under_title d-flex align-items-center justify-content-center">
			<h1 className="text_title">{t("under.construction")}</h1>
		    </Col>
		    <Col></Col>
		</Row>
	    </Container>
	)
    }
}

const UnderConstructionComponent = withTranslation()(UnderConstructionClass);

export default function UnderConstruction(){
    return(
	<Suspense fallback="">
	    <UnderConstructionComponent />
	</Suspense>
    )
}
