import React from 'react'

const Lyrics = ({lyrics}) => {
    return (
        <div className="lyrics-wrapper" style={{whiteSpace:'pre-wrap'}}>
            {lyrics}
        </div>
    )
}

export default Lyrics
