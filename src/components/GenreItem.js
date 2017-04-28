import React from 'react';
import { Link } from 'react-router';

const GenreItem = (props) => {
    const { genre, isActive} = props;

    return (
        <Link to={genre.value} className={ isActive? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action' }>
            {genre.name}
        </Link>
    );
};

export default GenreItem;