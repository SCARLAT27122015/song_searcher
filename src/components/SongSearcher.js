import React, { useEffect, useState } from 'react'
import Details from './Details'
import FormSearch from './FormSearch';
import Load from './Load'


const SongSearcher = () => {
    const [load, setLoad] = useState(false);
    const [bio, setBio] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [search, setSearch] = useState(null);

    const handleSearch = data => {
        setSearch(data);
    };

    useEffect(() => {
        if (!search) return;


        const getData = async (search) =>{
            const options = {
                'Content-Type':'application/json'
            };

            const {artist,song} = search;
            let urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
            urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            
            try {
                const [arrArtist, arrLyrics] = await Promise.all([fetch(urlArtist, options),fetch(urlLyrics, options)]);

                if (!arrArtist.ok || !arrLyrics.ok) throw new Error('There was an error on the requests');

                const jsonArtist = await arrArtist.json();
                const jsonLyrics = await arrLyrics.json();
                
                console.log(jsonLyrics);
                console.log(jsonArtist);
            } catch (error) {
                console.error(error);
            }
        };

        getData(search);
    }, [search]);

    return (
        <div>
            <h2>Song searcher</h2>
            {load && <Load/>}
            <FormSearch handleSearch={handleSearch}/>
            <Details/>
        </div>
    )
}

export default SongSearcher
