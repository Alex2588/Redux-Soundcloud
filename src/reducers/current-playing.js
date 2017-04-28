import { SET_CURRENT_TRACK } from '../actions/actionTypes';
 
export default function(state = null, action){

    switch(action.type){
        
        case SET_CURRENT_TRACK:
            return action.payload;
        default:
            return state;
    }
}
