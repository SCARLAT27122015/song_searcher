import React from 'react'

const Artist = ({bio}) => {
    console.log(bio);
    const {strArtist, strBiographyEN, strArtistThumb} = bio;
    return (
        <div>
            <h2>{strArtist}</h2>
            <img src={strArtistThumb} alt={strArtist}/>
            <p>{strBiographyEN}</p>
        </div>
    )
}

export default Artist
