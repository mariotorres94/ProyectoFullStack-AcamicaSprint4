import React from "react";
import Header from "./Header";
import Main from "./Main";
import '../LoggedOut/stylesHome.css';

const Home = ({ loginSocial }) => {
    return (
        <div className="home">
            <Header />
            <Main loginSocial={loginSocial} />
        </div>
    )
}

export default Home;