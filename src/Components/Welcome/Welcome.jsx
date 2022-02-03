import React, { useContext, useState, useEffect } from 'react';
import Header from '../LoggedOut/Header';
import Main from '../Welcome/Main';
//Hooks
import useTweetCollection from "../../Hooks/useTweetCollection";
import { UserContext } from '../../Context/UserContext';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

const Welcome = () => {
    const { userGoogle, setUserGoogle } = useContext(UserContext);
    const { addNewUser } = useTweetCollection();

    //LOCAL STORAGE
    const [dataUsuarioLogin, setUsuarioLogin] = useLocalStorage('dataUsuarioLogin', '')

    const datos = {
        email: userGoogle !== undefined ? userGoogle.email : dataUsuarioLogin.email,
        photoURL: userGoogle !== undefined ? userGoogle.photoURL : dataUsuarioLogin.photoURL,
        uid: userGoogle !== undefined ? userGoogle.uid : dataUsuarioLogin.uid,
        displayName: userGoogle !== undefined ? userGoogle.displayName : dataUsuarioLogin.displayName
    }

    //Capturando Datos de User Google
    const [formStateUser, setFormStateUser] = useState(datos);;

    useEffect(() => {
        setUsuarioLogin(datos);
        setUserGoogle(formStateUser);
    }, [])

    const handleChangeRegister = (e) => {
        const formValueTemp = {
            ...formStateUser,
            [e.target.name]: e.target.value,
        };
        setFormStateUser(formValueTemp);
    };

    const submitFormUser = (e) => {
        e.preventDefault();
        addNewUser(formStateUser);
        setFormStateUser(datos);
        setUsuarioLogin(formStateUser);
        setUserGoogle(formStateUser);
    };

    return (
        <div className='home'>
            <Header />
            <Main datos={dataUsuarioLogin} handleChangeRegister={handleChangeRegister} submitFormUser={submitFormUser} />
        </div>
    )
}

export default Welcome;