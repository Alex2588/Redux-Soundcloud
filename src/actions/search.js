import { SEARCH_REQUEST } from './actionTypes';
import { BASE_SEARCH_URL, CLIENT_ID } from '../constants';
import axios from 'axios';

export default function(searchValue){
    const request = axios.get(`/api/search/queries?q=armin&client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=10&offset=0`);  

    return {
        type: SEARCH_REQUEST,
        payload: request
    }
};
