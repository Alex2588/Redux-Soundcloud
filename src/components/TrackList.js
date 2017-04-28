import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Track from './Track';

const TrackList = ({tracksInfo, fetchMoreTracks, playTrack}) => {

    function renderTrackList(){
        const { tracks } = tracksInfo;

        if(tracks.length){
            return (
                tracks.map((track, i) => <Track playTrack={() => playTrack(track)} key={i} track={track} i={i}/>)
            ) 
        }
    }

    return(
        <div className="col-md-8 track-list">
            <InfiniteScroll
            next={() => fetchMoreTracks()}
            hasMore={true}
            loader={<div className="text-center"><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>}>
            <table className="table table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>#</th>
                        <th>Track</th>
                        <th>Duration</th>
                        <th>Size</th>                        
                    </tr>
                </thead>
                <tbody>
                    {renderTrackList()}
                </tbody>
            </table>
            </InfiniteScroll> 
        </div>
    );
    
};

export default TrackList;