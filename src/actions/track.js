import axios from 'axios';
import { FETCH_TRACKS, SET_CURRENT_TRACK } from './actionTypes';
import { BASE_URL, CLIENT_ID } from '../constants/index';

export function fetchTracks(genre, offset){
    const request = axios.get(`${BASE_URL}/tracks?client_id=${CLIENT_ID}&limit=20&offset=${offset}&tags=${genre}`); 

    return {
        type: FETCH_TRACKS,
        payload: request,
        offset
    }
};

export function setCurrentPlaying(track){
    return {
        type: SET_CURRENT_TRACK,
        payload: track
    }
}

