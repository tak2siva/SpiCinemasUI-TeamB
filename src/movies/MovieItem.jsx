import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default_image.png';

const MovieItem = ({name, slug, experiences}) => {
    const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
    return (
        <div className="col-md-2">
            <br/>
            <div align="center" >
                <img alt={name} src={imageUrl} 
                onError={(e) => {e.target.src=defaultImage}}/>
                <h5>{name}</h5>
                <h6>{experiences}</h6>
            </div>
        </div>
    )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    experiences: PropTypes.string.isRequired
};

export default MovieItem;
