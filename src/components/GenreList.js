import React from 'react';
import GenreItem from './GenreItem';

const GenreList = ({genres, activeGenre}) => {
    
    return(
        <div className="genre-list">
            <div className="row">
                <div className="list-group">
                    {genres.map(genre => {
                        return <GenreItem key={genre.name} genre={genre} isActive={genre.value === activeGenre}/>
                    })}
                </div>
            </div>
        </div>    
    );
    
};

export default GenreList;