import React, { Component } from 'react';
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from '../AppHeader.js'
import SignIn from './SignIn.js'
import SignOut from './SignOut.js'
import PageHome from '../PageHome.js'
import ListsContainer from '../lists/ListsContainer.js'

const Api = require('../../Api.js')

class TokenAuth extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    render() {
        return (
            <Router>
                <div>
                    <AppHeader appState={this.state} />

                    <Route exact path="/" component={PageHome} />

                    {this.state.jwt &&
                    <Route
                        exact path="/lists"
                        render={(routeProps) => (
                            <ListsContainer {...routeProps} appState={this.state} />
                        )}
                    />
                    }

                    {!this.state.jwt &&
                    <Route
                        exact path="/sign-in"
                        render={(routeProps) => (
                            <SignIn {...routeProps} propagateSignIn={this.propagateSignIn} />
                        )}
                    />
                    }

                    {this.state.jwt &&
                    <Route
                        exact path="/sign-out"
                        render={(routeProps) => (
                            <SignOut {...routeProps} propagateSignOut={this.propagateSignOut} />
                        )}
                    />
                    }
                </div>
            </Router>
        )
    }

    componentDidMount() {
        this.getUser()
    }

    defaultState() {
        return {
            cookieName: 'rails-react-token-auth-jwt',
            email: undefined,
            jwt: undefined,
            user_id: undefined,
        }
    }

    constructor(props) {
        super(props)

        this.state = this.defaultState()

        this.propagateSignIn = this.propagateSignIn.bind(this)
        this.propagateSignOut = this.propagateSignOut.bind(this)
    }

    propagateSignIn(jwt, history = undefined) {
        const { cookies } = this.props
        cookies.set(this.state.cookieName, jwt, { path: '/' })
        this.getUser(history)
    }

    propagateSignOut(history = undefined) {
        const { cookies } = this.props
        cookies.remove(this.state.cookieName)

        this.setState({
            email: undefined,
            user_id: undefined,
            jwt: undefined
        })
        if (history) history.push('/')
    }

    getUser(history = undefined) {
        const { cookies } = this.props
        let jwt = cookies.get(this.state.cookieName)
        if (!jwt) return null

        Api.getCurrentUser(jwt).then(response => {
            if (response !== undefined) {
                this.setState({
                    email: response.email,
                    user_id: response.id,
                    is_admin: response.admin,
                    jwt: jwt
                })
                if (history) history.push('/')
            }
            else {
                // user has cookie but cannot load current user
                console.log('cannot load')
                cookies.remove(this.state.cookieName)
                this.setState({
                    email: undefined,
                    user_id: undefined,
                    is_admin: undefined,
                    jwt: undefined
                })
            }
        })
    }

}

export default withCookies(TokenAuth)