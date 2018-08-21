import { Component } from 'react'

class SignOut extends Component {
    render() {
        return null
    }

    constructor(props) {
        super(props)
        this.props.propagateSignOut(this.props.history)
    }
}

export default SignOut