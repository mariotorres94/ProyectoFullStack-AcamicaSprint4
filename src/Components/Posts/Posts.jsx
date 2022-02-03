import React, { useContext, useEffect, useState } from 'react';
import Header from '../Posts/Header';
import Section from '../Posts/Section';
import ListTweetsUser from './ListTweetsUser';
import useTweetCollection from "../../Hooks/useTweetCollection";

const Posts = ({ logout }) => {
    const [activeSection, setActivateSection] = useState(false);
    const { getAllDocs } = useTweetCollection();

    const dataUserLogin = JSON.parse(window.localStorage.getItem('dataUsuarioLogin'));
    useEffect(() => {
        getAllDocs();
    })
    return (
        <div>
            <Header datos={dataUserLogin} logout={logout} />
            <Section datos={dataUserLogin} setActivateSection={setActivateSection} activeSection={activeSection} />
            <ListTweetsUser datos={dataUserLogin} activeSection={activeSection} />
        </div>
    )
}

export default Posts;