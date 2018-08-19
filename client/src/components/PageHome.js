import React from 'react'
import { Row, Col } from 'reactstrap'
import ListsContainer from './ListsContainer';

class PageHomeComponent extends React.Component {
    loggedIn() {
        return !!localStorage.getItem("jwt")
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={12}>
                        Home
                        {this.loggedIn ? <ListsContainer jwt={localStorage.getItem("jwt")} /> : null}
                    </Col>
                </Row>
            </div>
        )
    }

    constructor(props) {
        super(props)

    }
}

export default PageHomeComponent