import React from 'react';
import Back from '../../img/back.svg';
import Logout from '../../img/logout.svg';
import '../Posts/stylesPosts.css';
//React-Router-Dom
import {
    useNavigate
} from "react-router-dom";

const Header = ({ datos, logout }) => {
    const navigate = useNavigate();

    return (
        <header className='header__posts'>
            <div className='back__username'>
                <img src={Back} alt="back" onClick={() => { navigate('/feed') }} />
                <h3>{datos.username}</h3>
            </div>
            <div className='logout__username' onClick={logout}>
                <p>LOGOUT</p>
                <img src={Logout} alt="Logout" />
            </div>
        </header>
    )
}

export default Header;