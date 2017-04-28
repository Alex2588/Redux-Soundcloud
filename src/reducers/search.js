import { SEARCH_REQUEST } from '../actions/actionTypes';

const initialState = {
    searchResults: []
};

export default function(state = initialState, action){

    switch(action.type){
        case SEARCH_REQUEST:
            return action.payload.data
        default:
            return state;
    }
}