import React, { useContext, useEffect } from 'react';
import LogoSmall from '../../img/logo-small.svg';
import '../Feed/stylesFeed.css';
import {
    useNavigate
} from "react-router-dom";

const Header = ({ datos }) => {
    const navigate = useNavigate();

    const style = {
        border: `3.5px solid ${datos.color}`
    }
    return (
        <header className="feed__header">
            <img src={datos.photoURL} alt="Photo URL" width="33px" style={style} height="33px" onClick={() => { navigate('/profileUserA/') }} />
            <img src={LogoSmall} alt="" />
            <p><span>DEVS_</span>UNITED</p>
        </header>
    )
}

export default Header;