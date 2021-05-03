import React from 'react'

const Lyrics = ({lyrics}) => {
    return (
        <div style={{whiteSpace:'pre-wrap'}}>
            {lyrics}
        </div>
    )
}

export default Lyrics
