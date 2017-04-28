import { combineReducers } from 'redux';
import genreReducer from './genres';
import trackReducer from './tracks-list';
import searchReducer from './search';
import currentPlayingTrackReducer from './current-playing';

const rootReducer = combineReducers({
  genres: genreReducer,
  tracks: trackReducer,
  searchResults: searchReducer,
  currentPlayingTrack: currentPlayingTrackReducer
});

export default rootReducer;
