import React, { Component } from 'react'

export default class AndhraBank extends Component {
    render() {
        return (
            <div>
                <h1>AndhraBank account for{this.props.info.firstName}</h1>
            </div>
        )
    }
}
