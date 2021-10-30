import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)
        this.state= {
        name:"yasasri"
        }
    }
    render() {
        return (
            <div>
             <h1>
                 {this.state.name}
                 </h1>   
            </div>
        )
    }
}
