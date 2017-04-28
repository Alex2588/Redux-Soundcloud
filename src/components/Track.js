import React from 'react';

const Track = (props) => {
    const {track, i, playTrack} = props;

    function calcDuration(){
        const totalmS = track.duration;
        const min = Math.floor(totalmS/60000);
        let sec = Math.round(totalmS/1000 - min*60);
        
        if(sec < 10){
            sec = '0' + sec;
        }

        return min + ':' + sec;
    };

    function handleClick(){
        playTrack(track);
    }
    
    return(
        <tr onClick={handleClick}>
            <td>
                <strong>{i + 1}</strong>
            </td>
            <td>
                <div className="image-wrapper">
                    <img src={track.artwork_url}/>
                </div>
                {track.title}
            </td>
            <td>
                <small>{calcDuration()}</small>
            </td>
            <td>
                <small>{Math.round(track.original_content_size/1000000 * 10)/10} MB</small>
            </td>
        </tr>
    );
};

export default Track;