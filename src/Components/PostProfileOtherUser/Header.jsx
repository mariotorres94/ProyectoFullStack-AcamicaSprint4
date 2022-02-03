import React, { useContext } from 'react';
import Back from '../../img/back.svg';
import './stylesOtherUser.css';
//React-Router-Dom
import {
    useNavigate
} from "react-router-dom";

const Header = ({ datosUserB }) => {
    const navigate = useNavigate();

    return (
        <header className='header__otherUser'>
            <div className='back__otherUser'>
                <img src={Back} alt="back" onClick={() => { navigate('/feed') }} />
                <h3>{datosUserB.usuario.username}</h3>
            </div>
        </header>
    )
}

export default Header;