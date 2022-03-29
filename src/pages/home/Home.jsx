import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Card } from 'react-bootstrap';
import UnderConstruction from '../../components/under/UnderConstruction';

import './Home.css';

class HomeClass extends React.Component {
  render() {
	const { t } = this.props;
        return (
	    <React.Fragment>
			<h2>{t("home.welcome")}</h2>
			<Card>
				<Container>
					<UnderConstruction />
				</Container>
			</Card>
	    </React.Fragment>
        );
    }
}

const HomeComponent = withTranslation()(HomeClass);

export default function Home () {
  return (
    <Suspense fallback="">
    	<HomeComponent />
    </Suspense>
  )
};
