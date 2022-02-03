import React, { useEffect, useState } from 'react';
import Header from '../Feed/Header';
import Section from '../Feed/Section';
import LisTweets from './ListTweets';
//Hooks
import useTweetCollection from "../../Hooks/useTweetCollection";
import { useLocalStorage } from '../../Hooks/useLocalStorage';

const Feed = () => {
    const dataUserLogin = JSON.parse(localStorage.getItem('dataUsuarioLogin'));

    //LOCAL STORAGE
    const [dataStorageUser, setDataStorageUser] = useLocalStorage('dataStorageUser', '');

    const datos = {
        usuario: {
            color: dataUserLogin.color,
            email: dataUserLogin.email,
            photoURL: dataUserLogin.photoURL,
            uid: dataUserLogin.uid,
            displayName: dataUserLogin.displayName,
            username: dataUserLogin.username
        },
        tweet: "",
        likesUser: [

        ],
        favorite: 0,
    }

    const [formState, setFormState] = useState(datos);
    const { addNewTweet, getAllDocs } = useTweetCollection();

    useEffect(() => {
        getAllDocs();
    }, [])

    const handleChange = (e) => {
        const formValueTemp = {
            ...formState,
            [e.target.name]: e.target.value,
        };
        setFormState(formValueTemp);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setFormState(datos);
        setDataStorageUser(formState);
        addNewTweet(formState);
    };

    return (
        <div className='feed'>
            <Header datos={dataUserLogin} />
            <Section datos={dataUserLogin} handleChange={handleChange} submitForm={submitForm} formState={formState} />
            <LisTweets datos={dataUserLogin} />
        </div>
    )
}

export default Feed;