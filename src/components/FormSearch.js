import React, {useState} from 'react'


const initialForm = {
    artist:"",
    song:""
}

const FormSearch = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange=e=>{
        const {name, value} = e.target
        setForm({
            ...form, [name]:value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleSearch(form);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.artist} onChange={handleChange} name="artist" placeholder="Artist name"/>
                <input type="text" value={form.song} onChange={handleChange} name="song" placeholder="Song name"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default FormSearch
