import React from 'react';
import logo from '../images/pokemonLogo.png'

export const Header = () => {
    return(
        <header>
            <img id="pokemonLogo" src={logo} alt="Logo Pokemon" />
        </header>
    )
}