import React from 'react';
import { CLIENT_ID } from '../constants';

const Player = ({track, closePlayer}) => {

    let src = track? track.stream_url + '?client_id=' + CLIENT_ID : '';
        
    return(
        <div className={track? 'player show' : 'player hide'}>
        <span className="close-player" onClick={() => closePlayer()}>X</span>
            <audio src={src} controls autoPlay></audio>
        </div>      
    );
};

export default Player;