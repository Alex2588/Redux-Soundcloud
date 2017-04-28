import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPlaying } from '../actions/track';
import Player from './Player';

function mapStateToProps(state){
    return {
        track: state.currentPlayingTrack
    }
};

function mapDispatchToProps(dispatch){
    return{
        closePlayer: () => dispatch(setCurrentPlaying(null))
    }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerContainer;