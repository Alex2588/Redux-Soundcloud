import { FETCH_TRACKS } from '../actions/actionTypes';

const initialState = {
    tracks: [],
    offset: null
};

export default function(state = initialState, action){

    switch(action.type){
        case FETCH_TRACKS:
            if(action.offset){
                return {
                    tracks: [...state.tracks, ...action.payload.data],
                    offset: action.offset,
                    currentTrack: state.currentTrack
                };
            }
            return {
                tracks: action.payload.data,
                offset: 0,
                currentTrack: state.currentTrack
            }
        default:
            return state;
    }
}