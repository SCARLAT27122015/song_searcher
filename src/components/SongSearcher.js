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
        if (search===null) return;
        

        const getData = async (search) =>{
            const options = {
                'Content-Type':'application/json'
            };

            const {artist,song} = search;
            let urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
            urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            
            try {
                setLoad(true);
                const [arrArtist, arrLyrics] = await Promise.all([fetch(urlArtist, options),fetch(urlLyrics, options)]);

                if (!arrArtist.ok || !arrLyrics.ok) throw new Error('There was an error on the requests');

                const jsonArtist = await arrArtist.json();
                const jsonLyrics = await arrLyrics.json();
                
                setLyrics(jsonLyrics.lyrics);
                setBio(jsonArtist.artists[0]);
                
            } catch (error) {
                console.error(error);
            }finally {
                setLoad(false);
            }
        };

        getData(search);
    }, [search]);

    return (
        <>
        <div className="songsearcher-wrapper">
            <h1>Song searcher</h1>
            <FormSearch handleSearch={handleSearch}/>
            {load && <Load/>}
            { search && <Details bio={bio} lyrics={lyrics}/>}
        </div>
        <div className="clear"></div>
        </>
    )
}

export default SongSearcher
