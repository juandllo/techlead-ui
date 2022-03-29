import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Card, Container } from 'react-bootstrap';

export class NotFoundClass extends React.Component {
  render () {
	const { t } = this.props;
        return (
	    <Card>
		<Container>
		    <h2>{t("notfound.message")}</h2>
		</Container>
	    </Card>
        )
    }
}

const NotFoundComponent = withTranslation()(NotFoundClass);

export default function NotFound(){
  return (
    <Suspense fallback="">
      <NotFoundComponent />
    </Suspense>
  )
}
