/*
 * REALIZADO POR JUAN DAVID ARBOLEDA ZULETA DE SU PROPIA MENTE!
 * */
import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import enIcon from './images/united-states.png';
import esIcon from './images/colombia.png';

class MyLangClass extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            languages: [
                {
                    "id" : "es",
                    "icon" : esIcon
                }, {
                    "id" : "en",
                    "icon" : enIcon
                }
            ]
        }
    }

    componentDidMount() {
        this.setState ({
            flagActiveLang: this.state.languages.filter(lang => lang.id === i18n.language)[0].icon
        });
    }

    render () {

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
            this.state.languages
                .filter(lang => lang.id === lng)
                .map(lang => { 
                    this.setState({ flagActiveLang: lang.icon });
                });
        }

        return (
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-split-basic" >
                    <img 
                        src={this.state.flagActiveLang}
                        width="20"
                        heigh="20"
                        />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        this.state.languages.map(lang => {
                            return (
                                <Dropdown.Item 
                                    onClick={() => changeLanguage(lang.id)} 
                                    key={lang.id} 
                                    active={i18n.language === lang.id ? "active" : ""}>
                                    <img 
                                        src={lang.icon}
                                        width="20"
                                        heigh="20"
                                    /> Espanish
                                </Dropdown.Item>
                            );
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

const MyLangComponent = withTranslation()(MyLangClass)

export default function MyLang() {
    return (
        <Suspense fallback="">
            <MyLangComponent />
        </Suspense>
    )
};
