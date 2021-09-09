import React from 'react';
import epam from '../assets/images/epam-logo.svg'

export const Footer = () => {
    return (
        <footer >
                <img src={epam} class="rounded float-center" alt="epam-logo" style = {{width: '6%'}}></img>
        </footer>
    )
}
