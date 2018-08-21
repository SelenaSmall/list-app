import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'

class AppHeader extends Component {
    render() {
        return (
            <Navbar expand="md">
                <NavbarBrand href="/">React List</NavbarBrand>
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
