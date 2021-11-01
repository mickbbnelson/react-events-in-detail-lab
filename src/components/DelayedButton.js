// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    dClick = (event) => {
        timer = setTimeout(() => {
            onDelayClick(event)
        }, this.props.delay)
    }
    
    render() {
    return (
        <button
        onClick={this.dClick}>    
        </button>
    )
}
}