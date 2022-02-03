import React from "react";
import Logo from '../../img/logoBig.svg';
import '../LoggedOut/stylesHome.css'

const Header = () => {
    return (
        <section className="home__logo">
            <img src={Logo} alt="Logo" width="311px" height="207px" />
        </section>
    )
}

export default Header;