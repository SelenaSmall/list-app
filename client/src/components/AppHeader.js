import React, { Component } from 'react';
import {
    // Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'

class AppHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar expand="md">
                <NavbarBrand href="/">React List</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                {/*<Collapse isOpen={this.state.isOpen} navbar>*/}
                    <Nav pullRight>
                    {!this.props.appState.jwt &&
                    <LinkContainer exact to="/sign-in">
                        <NavItem eventKey={3}>
                        Sign In
                        </NavItem>
                    </LinkContainer>
                    }

                    {this.props.appState.jwt &&
                    <LinkContainer exact to="/sign-out">
                        <NavItem eventKey={4}>
                        Sign Out
                        </NavItem>
                    </LinkContainer>
                    }
                    </Nav>
                {/*</Collapse>*/}
            </Navbar>
        )
    }
}
export default AppHeader;
