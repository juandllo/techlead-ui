import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbar.css';
import MyLang from '../lang/MyLang';

import { HiOutlineLogout } from 'react-icons/hi';

class NavBarClass extends React.Component {

    constructor (props){
	    super(props);
    	this.state = {
            menuOptions: [{
                "id": "apps",
                "prefix": "apps",
                "translateKey": "navbar.apps",
                "to": "/"
            }],
            menuSelected: "apps"
        };
    }

    render () {
        const { t } = this.props;

        const menuSelector = (menuOpt) => {
            this.setState({
                menuSelected: menuOpt
            });
        }

        const validateMenuSelection = (menuOpt) => {
            return this.state.menuSelected === menuOpt ? "active" :""; 
        }

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            this.state.menuOptions.map(menuOpt => {
                                return (
                                    <Link key={menuOpt.id} 
                                        onClick={() => menuSelector(menuOpt.prefix)} 
                                        className={`link-unstyled nav-link ${ validateMenuSelection(menuOpt.prefix) }`}
                                        to={menuOpt.to}>{t(menuOpt.translateKey)}
                                    </Link>
                                );
                            })
                        }
                        
                        <NavDropdown title={t("navbar.more")} id="collasible-nav-dropdown">
                            <NavDropdown.Item >{t("navbar.action1")}</NavDropdown.Item>
                            <NavDropdown.Item >{t("navbar.action2")}</NavDropdown.Item>
                            <NavDropdown.Item >{t("navbar.action3")}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>{t("navbar.action4")}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <MyLang />
                        <NavDropdown title="Juan Arboleda" id="collasible-nav-dropdown">
                            
                            <NavDropdown.Item >{t("navbar.manage")}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <div className="row">
                                    <div className="col-md-6">
                                        {t("navbar.logout")}
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <HiOutlineLogout />
                                    </div>
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const NavComponent = withTranslation()(NavBarClass)

export default function NavBar() {
    return (
        <Suspense fallback="">
            <NavComponent />
        </Suspense>
    )
};
