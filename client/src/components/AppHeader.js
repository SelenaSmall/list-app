import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'

class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: this.props.appState.is_admin
        }
    }

    render() {
        return (

            <Navbar expand="md">
                <NavbarBrand>{this.props.appState.email}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Nav>
                    <LinkContainer exact to="/">
                        <NavItem>
                            Home
                        </NavItem>
                    </LinkContainer>

                    {this.props.appState.jwt &&
                    <LinkContainer exact to="/lists">
                        <NavItem>
                            Lists
                        </NavItem>
                    </LinkContainer>
                    }
                </Nav>
                <Nav>
                    {!this.props.appState.jwt &&
                    <LinkContainer exact to="/sign-in">
                        <NavItem>
                        Sign In
                        </NavItem>
                    </LinkContainer>
                    }

                    {this.props.appState.jwt &&
                    <LinkContainer exact to="/sign-out">
                        <NavItem>
                        Sign Out
                        </NavItem>
                    </LinkContainer>
                    }
                </Nav>
            </Navbar>
        )
    }
}
export default AppHeader;
