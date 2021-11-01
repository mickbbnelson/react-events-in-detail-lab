// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    //constructor(props) {
    //    super(props);
    //}


    mCoor = (event) => {
        const mArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mArray)
    }

    render() {
    return (
        <button
        onClick={this.mCoor}>
        </button>
    )
}
}