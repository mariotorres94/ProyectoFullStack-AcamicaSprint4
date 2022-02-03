import React, { useContext } from "react";
import Google from '../../img/google.svg';

const Main = ({ loginSocial }) => {
    return (
        <section className="home__main">
            <h1>Lorem <br />Ipsum Dolor</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <div className="button__google" onClick={loginSocial}>
                <div className="background__img__google">
                    <img src={Google} alt="Google"></img>
                </div>
                <p>Sign in with Google</p>
            </div>
            <p>&copy; 2021 Devs_United - <span>BETA</span></p>
        </section>
    )
}

export default Main;