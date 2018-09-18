// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

    logOnFocus = () => {
        console.log("Good!")
    }

    logOnBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button
            onFocus={this.logOnFocus}
            onBlur={this.logOnBlur}
            >
            </button>
        )
    }
}

export default EyesOnMe