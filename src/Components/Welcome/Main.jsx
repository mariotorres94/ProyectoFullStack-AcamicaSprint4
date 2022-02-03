import React from 'react';
import '../Welcome/stylesWelcome.css';

const Main = ({ datos, handleChangeRegister, submitFormUser }) => {

    return (
        <form className="welcome__section" onSubmit={submitFormUser}>
            <h1>WELCOME <br /> <span>{datos.displayName}!</span></h1>
            <input type="text" placeholder="Type your username" name="username" value={handleChangeRegister.username} onChange={handleChangeRegister} />
            <p>Select your favorite color</p>
            <div className="welcome__select__color">
                <input type="radio" className='red' name="color" value="red" onChange={handleChangeRegister} />
                <input type="radio" className='orange' name="color" value="orange" onChange={handleChangeRegister} />
                <input type="radio" className='yellow' name="color" value="yellow" onChange={handleChangeRegister} />
                <input type="radio" className='green' name="color" value="green" onChange={handleChangeRegister} />
                <input type="radio" className='skyBlue' name="color" value="skyBlue" onChange={handleChangeRegister} />
                <input type="radio" className='purple' name="color" value="purple" onChange={handleChangeRegister} />
            </div>
            <div className="continue">
                <button type='submit'>
                    Continue
                </button>
            </div>
            <p>&copy; 2021 Devs_United - <span>BETA</span></p>
        </form >
    )
}

export default Main;