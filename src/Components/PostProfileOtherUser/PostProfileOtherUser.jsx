import React, { useContext, useEffect } from "react";
import Header from "./Header";
import ListTweetsOtherUser from "./ListTweetsOtherUser";
import Section from "./Section";
//Hooks
import useTweetCollection from "../../Hooks/useTweetCollection";

const PostProfileOtherUser = () => {
    const datosUsuarioB = JSON.parse(window.localStorage.getItem('usuarioB'));
    const { getAllDocs } = useTweetCollection();

    useEffect(() => {
        getAllDocs();
    }, [])
    return (
        <div>
            <Header datosUserB={datosUsuarioB} />
            <Section datosUserB={datosUsuarioB} />
            <ListTweetsOtherUser datosUserB={datosUsuarioB} />
        </div>
    )
}

export default PostProfileOtherUser;