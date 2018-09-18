import React, { Component } from 'react'
class Keypad extends Component {

    typeOnKeypad = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input
            type="password"
            onKeyUp={this.typeOnKeypad}
            >
            
            </input>
        )
    }
}

export default Keypad