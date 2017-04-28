import { GET_GENRE_LIST, SELECT_ACTIVE_GENRE } from '../actions/actionTypes';

const initialState = [
                {name: 'All genres', isActive: true, value: 'all'},
                // {name: 'Alternative rock', isActive: false, value: 'alternativerock'},
                {name: 'Ambient', isActive: false, value: 'ambient'}, 
                {name: 'Classical', isActive: false, value: 'classical'}, 
                {name: 'Country', isActive: false, value: 'country'}, 
                {name: 'Dance & EDM', isActive: false, value: 'danceedm'},
                // {name: 'Dancehall', isActive: false, value: 'dancehall'}, 
                // {name: 'Deep House', isActive: false, value: 'deephouse'},
                {name: 'Disco', isActive: false, value: 'disco'},
                {name: 'Drum & Buss', isActive: false, value: 'drumbass'},
                {name: 'Dubstep', isActive: false, value: 'dubstep'},
                // {name: 'Electronic', isActive: false, value: 'electronic'},
                // {name: 'Folk & Singer-Songwriter', isActive: false, value: 'folksingersongwriter'},
                {name: 'Hip-hop & Rap', isActive: false, value: 'hiphoprap'},
                {name: 'House', isActive: false, value: 'house'},
                {name: 'Jazz & Blues', isActive: false, value: 'jazzblues'},
                {name: 'Latin', isActive: false, value: 'latin', value: 'latin'},
                {name: 'Metal', isActive: false, value: 'metal'},
                // {name: 'Piano', isActive: false},
                {name: 'Pop', isActive: false, value: 'pop'},
                // {name: 'R&B & Soul', isActive: false},
                // {name: 'Reggae', isActive: false},
                {name: 'Reggaeton', isActive: false, value: 'reggaeton'},
                {name: 'Rock', isActive: false, value: 'rock'},
                {name: 'Soundtrack', isActive: false, value: 'soundtrack'},
                {name: 'Techno', isActive: false, value: 'techno'},
                {name: 'Trance', isActive: false, value: 'trance'}
                // {name: 'Trap', isActive: false},
                // {name: 'Triphop', isActive: false},
                // {name: 'World', isActive: false}
];

export default function(state = initialState, action){
    return state;     
};