import React, { useContext } from "react";

const Section = ({ datosUserB }) => {
    const styleBorder = {
        border: `3.5px solid ${datosUserB.usuario.color}`
    }

    const styleUsername = {
        width: "161px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        marginTop: "20px",
        fontFamily: "Silkscreen",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "24px",
        backgroundColor: `${datosUserB.usuario.color}`
    }
    return (
        <section className='posts__section'>
            <div className='posts__profile'>
                <img src={datosUserB.usuario.photoURL} alt="Profile" style={styleBorder} />
                <h1 style={styleUsername}>{(datosUserB.usuario.username).toUpperCase()}</h1>
            </div>
        </section>
    )
}

export default Section;