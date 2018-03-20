import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import {connect} from 'react-redux';
import fetchMovies from './actions';
import {bindActionCreators} from "redux";

class MovieGrid extends Component {

    render() {
        if (this.props.movies.fetching) {
            return this.showProgress()
        }
        return this.props.movies.error || false ? this.showError() : this.showMovies();
    }

    showMovies() {
        return (

            <div className="container-fluid">
                <div>
                    {this.props.movies.items.map(({name, slug}) => (
                        <MovieItem key={name} name={name} slug={slug}/>
                    ))}
                </div>
            </div>
        );
    }

    showProgress() {
        return (
            <div>Loading...</div>
        );
    }

    showError() {
        return (
            <div className="container-fluid">Error...</div>
        );
    }
}

MovieGrid.defaultProps = {
    movies: {
        items: []
    }
};

MovieGrid.propTypes = {
    movies: PropTypes.shape({
        items: PropTypes.array,
    })
};


function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: bindActionCreators(fetchMovies, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);