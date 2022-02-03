import React, { useEffect, useContext } from 'react';
import Delete from '../../img/delete.svg';
import On from '../../img/on.svg';
import Off from '../../img/off.svg';
import { useNavigate } from 'react-router-dom';
//Hooks
import useTweetCollection from "../../Hooks/useTweetCollection";
//Import useContext, UserContext from UserContext.js
import { UserContext } from '../../Context/UserContext';
import Loading from '../../img/Loading.gif';
import { useState } from 'react/cjs/react.development';
import { TweetContext } from '../../Context/TweetContext';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

const LisTweets = ({ datos }) => {
    const navigate = useNavigate();
    const { tweet } = useContext(TweetContext);
    const { deleteCollection, addLikes } = useTweetCollection();
    const { userB, setUserB } = useContext(UserContext);
    const [usuarioB, setUsuarioB] = useLocalStorage('usuarioB', '');
    const [dataUsuarioB, setDataUsuarioB] = useState();

    useEffect(() => {
        setDataUsuarioB(usuarioB);
    }, [])

    const styleUsernameImg = {
        display: "flex",
        justifyContent: "space-around",
        padding: "4px",
        fontFamily: "Silkscreen",
        fontSize: "12px"
    }

    const styleSpan = {
        fontFamily: "Fira Code",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "21px",
        color: "white"
    }

    const handleAddLikes = async (id) => {
        await addLikes(id);
    }

    const datosUserB = (e) => {
        tweet.map((lista) => {
            if (e.target.alt === lista.id) {
                setUserB(lista);
                setUsuarioB(lista);
                navigate('/profileUserB');
            }
        })
    }

    return (
        <div className="listTweets">
            {
                tweet === undefined ?
                    (<div className="listTweets__img">
                        <img src={Loading} alt="Loading" width="180px" height="180px" />
                    </div>)
                    : tweet.map((lista) => {
                        const styleUserH2 = {
                            width: "160px",
                            height: "18px",
                            backgroundColor: `${lista.usuario.color}`,
                            marginRight: "5px",
                            fontSize: "14px",
                            borderRadius: "0 5px 0 5px",
                            padding: "1px 4px"
                        }
                        return (
                            <div key={lista.id} className="listTweet__content">
                                <div className='listTweet__img'>
                                    {
                                        datos.uid === lista.usuario.uid ? <img src={datos.photoURL} alt="" width="48px" height="48px" onClick={() => { navigate('/profileUserA') }} /> :
                                            <img src={lista.usuario.photoURL} alt={lista.id} width="48px" height="48px" onClick={datosUserB} />
                                    }
                                </div>
                                <div className='listTweet__msj'>
                                    <div className='lisTweet__msj__flex'>
                                        {
                                            datos.uid === lista.usuario.uid && lista.usuario.color ? (
                                                <div style={styleUsernameImg}><h2 style={styleUserH2}>{datos.username}</h2> <span style={styleSpan}>- {lista.date.day} {lista.date.month}</span></div>
                                            ) : (
                                                <div style={styleUsernameImg}><h2 style={styleUserH2}>{lista.usuario.username}</h2> <span style={styleSpan}>- {lista.date.day} {lista.date.month}</span></div>
                                            )
                                        }
                                        {
                                            datos.uid === lista.usuario.uid ? <img src={Delete} alt="Delete" onClick={() => deleteCollection(lista.id)} /> : ""
                                        }
                                    </div>
                                    <p>{lista.tweet}</p>
                                    <div className='listTweet__likes'>
                                        {
                                            (lista.likesUser.indexOf(datos.uid) === -1) ?
                                                (
                                                    (
                                                        <div>
                                                            <img src={Off} alt="Off" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                                        </div>
                                                    )
                                                ) : (lista.likesUser.indexOf(datos.uid) !== -1) ?
                                                    (
                                                        <div>
                                                            <img src={On} alt="On" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                                        </div>
                                                    ) : ""
                                            // (lista.usuario.uid === datos.uid) ?
                                            // (
                                            //     <div>
                                            //         <img src={Off} alt="Off" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                            //     </div>
                                            // )
                                            // : (lista.usuario.uid !== datos.uid) ?
                                            //     (
                                            //         <div>
                                            //             <img src={Off} alt="Off" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                            //         </div>
                                            //     )
                                            //     :
                                            //     (
                                            //         <div>
                                            //             <img src={On} alt="On" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                            //         </div>
                                            //     )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default LisTweets;