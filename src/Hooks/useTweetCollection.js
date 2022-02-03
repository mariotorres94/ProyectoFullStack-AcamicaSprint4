import { useContext } from "react";
import {
    addDoc,
    getDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";
//React-Router-Dom
import {
    useNavigate
} from "react-router-dom";
import { getRefCollection } from '../Firebase/Config';
import { TweetContext } from "../Context/TweetContext";
// import { UserContext } from '../Context/UserContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function useTweetCollection() {
    const navigate = useNavigate();
    const { setTweet } = useContext(TweetContext);
    // const { userGoogle } = useContext(UserContext);
    const dataUserLogin = JSON.parse(localStorage.getItem('dataUsuarioLogin'));

    const meses = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];
    const fecha = new Date();
    const day = fecha.getDate();
    const mes = fecha.getMonth();
    const month = meses[mes];
    const year = fecha.getFullYear();

    //Obtener datos de la base de datos getTweets
    const getAllDocs = async () => {
        try {
            const querySnapshot = await getDocs(getRefCollection('tweets'));

            const tweetsArray = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                };
            });
            setTweet(tweetsArray);
        } catch (e) {
            console.log(e);
        }
    }

    //Obtener users de la base de datos
    // const getAllUsers = async () => {
    //     try {
    //         const querySnapshotUser = await getDocs(getRefCollection('users'));

    //         const usersArray = querySnapshotUser.docs.map((user) => {
    //             return {
    //                 ...user.data(),
    //                 id: user.id
    //             };
    //         });
    //         // setUsers(usersArray);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    //Agregar nuevo usuario en firestore
    const addNewUser = async (formStateUser) => {
        try {
            const docRefUser = await addDoc(getRefCollection('users'), {
                ...formStateUser,
                date: {
                    day,
                    month,
                    year
                }
            });
            // console.log("Document written with ID:", docRefUser.id);
            if (docRefUser.id) {
                // await getAllUsers();
                await getAllDocs();
                navigate('/feed');
            }
        } catch (e) {
            console.error("Error adding user:", e);
        }
    }

    //Agregar documento en firestore pruebaCollection
    const addNewTweet = async (formState) => {
        try {
            const docRef = await addDoc(getRefCollection('tweets'), {
                ...formState,
                date: {
                    day,
                    month,
                    year
                },
            });
            // console.log("Document written with ID:", docRef.id);
            await getAllDocs();
            // await getAllUsers();
            // return docRef.get();
        } catch (e) {
            console.error("Error adding document:", e);
        }
    };

    //Borrar documento en firestore
    const deleteCollection = async (id) => {
        // console.warn("Eliminando Documento:", id);
        // const delRef = await deleteDoc(doc(getRefCollection('tweet')));
        const refDocument = doc(getRefCollection('tweets'), id);
        try {
            const MySwal = withReactContent(Swal);
            MySwal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            await MySwal.fire({
                title: 'Esta Seguro?',
                text: "No podra revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, Borralo',
                cancelButtonText: 'No, Cancela!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(refDocument);
                    MySwal.fire(
                        'Eliminado!',
                        'El comentario fue eliminado',
                        'success'
                    )
                    getAllDocs();
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    MySwal.fire(
                        'Cancelado',
                        'El comentario no fue eliminado',
                        'error'
                    )
                }
            })
        } catch (e) {
            console.error("Error adding document:", e);
        }
    }

    //Add Likes
    const addLikes = async (id) => {
        const docRef = await doc(getRefCollection('tweets'), id);

        const docSnap = await getDoc(docRef);
        // console.log(docSnap.data().likesUser);

        let obteniendoUid;

        docSnap.data().likesUser.map((e) => {
            if (e === dataUserLogin.uid) {
                obteniendoUid = e;
            }
        })

        if (obteniendoUid === dataUserLogin.uid) {
            await updateDoc(docRef, {
                likesUser: arrayRemove(dataUserLogin.uid),
                favorite: docSnap.data().favorite ? docSnap.data().favorite - 1 : 1,
            });
        } else {
            await updateDoc(docRef, {
                likesUser: arrayUnion(dataUserLogin.uid),
                favorite: docSnap.data().favorite ? docSnap.data().favorite + 1 : 1,
            });
        }

        await getAllDocs();
    }

    return { addNewTweet, getAllDocs, deleteCollection, addLikes, addNewUser };
}

export default useTweetCollection;