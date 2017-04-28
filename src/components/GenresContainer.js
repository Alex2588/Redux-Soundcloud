import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks, setCurrentPlaying } from '../actions/track';
import { bindActionCreators } from 'redux';
import GenreList  from './GenreList';
import TrackList from './TrackList';

class GenresContainer extends React.Component{

    constructor(props){
        super(props);
        this.fetchMoreTracks = this.fetchMoreTracks.bind(this);
        this.playTrack = this.playTrack.bind(this);
    }
    
    componentDidMount(){
        this.props.onFetchTracks(this.props.activeGenre, 0);
    }

    componentDidUpdate(prevProps){
        if(this.props.activeGenre !== prevProps.activeGenre){
            this.props.onFetchTracks(this.props.activeGenre, 0);
        }
    }

    playTrack(track){
        this.props.onSelectCurrentTrack(track);
    }

    fetchMoreTracks(){
        const offset = this.props.tracks.offset + 20;
        this.props.onFetchTracks(this.props.activeGenre, offset);
    }

    render(){
        const {tracks, genres, activeGenre} = this.props;
        return(
            <div className="row">
                <GenreList genres={genres} activeGenre={activeGenre}/>
                <TrackList tracksInfo={tracks} fetchMoreTracks={this.fetchMoreTracks} playTrack={this.playTrack}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        genres: state.genres,
        activeGenre: ownProps.params.genre || 'all',
        tracks: state.tracks
    }
};

function mapDispatchToProps(dispatch){
    return {
        onFetchTracks: bindActionCreators(fetchTracks, dispatch),
        onSelectCurrentTrack: bindActionCreators(setCurrentPlaying, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer)
