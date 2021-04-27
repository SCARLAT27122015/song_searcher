import React, { useState } from 'react'
import Details from './Details'
import FormSearch from './FormSearch';
import Load from './Load'


const SongSearcher = () => {
    const [load, setLoad] = useState(false);


    return (
        <div>
            <h2>Song searcher</h2>
            <Load/>
            <FormSearch/>
            <Details/>
        </div>
    )
}

export default SongSearcher
