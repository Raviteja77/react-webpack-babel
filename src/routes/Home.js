
import '../styles/index.scss';
import React, { Component } from 'react';
import image from '../assets/images/epam.jpg'

export class Home extends Component {
    render() {
        return (
            <div>
                This is from Home component
                <div className="image"></div>
                <img src= { image } alt="image"/>
            </div>
        )
    }
}
