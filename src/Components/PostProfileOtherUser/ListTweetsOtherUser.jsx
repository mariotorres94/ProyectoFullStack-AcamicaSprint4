import React, { useContext } from "react";
import On from '../../img/on.svg';
import Off from '../../img/off.svg';
// Import useContext, UserContext from UserContext.js
import { TweetContext } from '../../Context/TweetContext';
import Loading from '../../img/Loading.gif';
//Hooks
import useTweetCollection from "../../Hooks/useTweetCollection";
import { useEffect } from "react/cjs/react.development";

const ListTweetsOtherUser = ({ datosUserB }) => {
    const { tweet } = useContext(TweetContext);
    const { addLikes } = useTweetCollection();

    const dataUserLogin = JSON.parse(localStorage.getItem('dataUsuarioLogin'));

    const styleUsernameImg = {
        display: "flex",
        justifyContent: "space-around",
        padding: "4px",
        fontFamily: "Silkscreen",
        fontSize: "12px"
    }

    const styleOtherUserH2 = {
        width: "160px",
        height: "18px",
        backgroundColor: `${datosUserB.usuario.color}`,
        marginRight: "5px",
        fontSize: "14px",
        borderRadius: "0 5px 0 5px",
        padding: "1px 4px"
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

    return (
        <div>
            {
                tweet === undefined ? (<div className="listTweets__img">
                    <img src={Loading} alt="Loading" width="180px" height="180px" />
                </div >)
                    : tweet.map(lista => {
                        return (
                            <div key={lista.id}>
                                {
                                    lista.usuario.uid === datosUserB.usuario.uid ?
                                        <div key={lista.id} className="listTweet__content">
                                            <div className='listTweet__img'>
                                                {
                                                    datosUserB.usuario.uid === lista.usuario.uid && <img src={datosUserB.usuario.photoURL} alt="" width="48px" height="48px" />
                                                }
                                            </div>
                                            <div className='listTweet__msj'>
                                                <div className='lisTweet__msj__flex'>
                                                    {
                                                        datosUserB.usuario.uid === lista.usuario.uid && (
                                                            <div style={styleUsernameImg}><h2 style={styleOtherUserH2}>{lista.usuario.username}</h2> <span style={styleSpan}>- {lista.date.day} {lista.date.month}</span></div>
                                                        )
                                                    }
                                                </div>
                                                <p>{lista.tweet}</p>
                                                <div className='listTweet__likes'>
                                                    {
                                                        (lista.likesUser.indexOf(dataUserLogin.uid) === -1) ?
                                                            (
                                                                <div>
                                                                    <img src={Off} alt="Off" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                                                </div>
                                                            ) : (lista.likesUser.indexOf(dataUserLogin.uid) !== -1) ?
                                                                (
                                                                    <div>
                                                                        <img src={On} alt="On" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        <img src={Off} alt="Off" width="18px" height="15px" onClick={() => handleAddLikes(lista.id)} />{lista.favorite}
                                                                    </div>
                                                                )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                }
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default ListTweetsOtherUser;