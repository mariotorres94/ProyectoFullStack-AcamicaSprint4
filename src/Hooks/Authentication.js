import { useContext } from "react";
import { browserLocalPersistence, setPersistence, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/Config";
//React-Router-Dom
import {
    useNavigate
} from "react-router-dom";
import { UserContext } from '../Context/UserContext';

function useAuthentication() {
    const navigate = useNavigate();
    const { setUserGoogle } = useContext(UserContext);

    const loginSocial = async () => {
        try {
            await setPersistence(auth, browserLocalPersistence)
                .then(async () => {
                    await signInWithPopup(auth, googleProvider)
                        .then(() => {
                            onAuthStateChanged(auth, (us) => {
                                if (us !== null) {
                                    const user = us;
                                    setUserGoogle(user);
                                }
                            })
                        });
                });
            //Seteo la informacion del usuario
        } catch (e) {
            console.error(
                "🚀 ~ file: useAuthentication.js ~ line 10 ~ loginSocial ~ e",
                e.message
            );
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            //Actualizamos el contexto
            setUserGoogle(null);
            localStorage.clear();
            navigate('/');
        } catch (e) {
            console.log("🚀 ~ file: useAuthentication.js ~ line 35 ~ logout ~ e", e);
        }
    }

    return { loginSocial, logout };
};

export default useAuthentication;