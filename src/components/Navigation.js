import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="App-links">
            <div className="App-links-to"><Link to="/">Home</Link></div>
            <div className="App-links-to"><Link to="/about">About</Link></div>
            <div className="App-links-to"><Link to="/contact">Contact</Link></div>
          </div>
    )
}
