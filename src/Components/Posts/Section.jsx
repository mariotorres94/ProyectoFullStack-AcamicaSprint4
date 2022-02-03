import React from 'react';

const Section = ({ datos, setActivateSection, activeSection }) => {
    const stylePhotoURL = {
        border: `5px solid ${datos.color}`
    }

    const styleUserName = {
        backgroundColor: `${datos.color}`,
        width: "161px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        marginTop: "20px",
        fontFamily: "Silkscreen",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "24px"
    }
    return (
        <section className='posts__section'>
            <div className='posts__profile'>
                <img src={datos.photoURL} alt="Profile" style={stylePhotoURL} />
                <h1 style={styleUserName}>{(datos.username).toUpperCase()}</h1>
            </div>
            <div className='selection__button'>
                <div className={`button__post ${activeSection ? "" : 'button__post__background'}`} onClick={() => { setActivateSection(false); }} >
                    <h2>POSTS</h2>
                </div>
                <div className={`button__favorites ${activeSection ? 'button__post__background' : ""}`} onClick={() => { setActivateSection(true); }} >
                    <h2>FAVORITES</h2>
                </div>
            </div>
        </section>
    )
}

export default Section;