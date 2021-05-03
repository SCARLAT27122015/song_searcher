import React, { useEffect } from 'react'
import { useValidations } from '../hooks/useValidations';


const initialForm = {
    artist:"",
    song:""
}

const formValidator = (formHook) => {
    const error = {};
    if (!formHook.artist) {
        error.artist = 'The artist cannot be blank'
    } 

    if (!formHook.song) {
        error.song = 'The song cannot be blank'
    }

    return error;
};

const FormSearch = ({handleSearch}) => {
    const {errors, formHook, resp, handleChange, handleSubmit } = useValidations(initialForm, formValidator);
    useEffect(() => {
        if (Object.keys(errors).length === 0 ) handleSearch(resp);
    }, [resp])

    
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  value={formHook.artist} onChange={handleChange} name="artist" placeholder="Artist name"/>
                { errors.artist && <p>{errors.artist}</p>}
                <input type="text"  value={formHook.song} onChange={handleChange} name="song" placeholder="Song name"/>
                { errors.song && <p>{errors.song}</p>}
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default FormSearch
