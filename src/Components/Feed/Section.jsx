import React from 'react';

const Section = ({ datos, handleChange, submitForm, formState }) => {
    return (
        <form className='feed__section' onSubmit={submitForm}>
            <div className='feed__content'>
                <img src={datos.photoURL} alt="Photo URL" width="48px" height="48px" />
                <textarea type="text" placeholder="What's happenning?" maxLength={formState.tweet.length < 200 ? formState.tweet.length + 1 : formState.tweet.length - 1} name="tweet" value={formState.tweet} onChange={handleChange} />
            </div>
            <hr />
            <div className='container__section'>
                <div className='textMax'>
                    <p>17</p>
                    <p>{formState.tweet.length >= 0 && formState.tweet.length <= 200 && (200 - formState.tweet.length)} máx.</p>
                </div>
                <div className='buttonPost'>
                    <button type='submit'>POST</button>
                </div>
            </div>
        </form>
    )
}

export default Section;