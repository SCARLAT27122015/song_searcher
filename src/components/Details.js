import React from 'react'
import Artist from './Artist'
import Lyrics from './Lyrics'

const Details = ({bio, lyrics}) => {
    return (
        
        <div className="details-wrapper">
            <h2>Here's your info</h2>
            {bio && <Artist bio={bio}/>}
            {lyrics && <Lyrics lyrics={lyrics}/>}
        </div>
        
    )
}

export default Details
