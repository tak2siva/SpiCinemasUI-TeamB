import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as movieActions from './movieTypeActions';
import {bindActionCreators} from 'redux';
import { NOW_SHOWING, COMING_SOON } from './movieTypeActions'
import fetchMovies from "../movies/actions";

class MovieType extends Component{
    constructor(props){
        super(props);   
        this.onMovieTypeChange = this.onMovieTypeChange.bind(this);
        this.props.fetchMovies(this.props.movieFilter);
    }

    onMovieTypeChange(event){
        this.props.actions.changeMovieType(event.target.id);
        this.props.movieFilter.movieType = event.target.id;
        this.props.fetchMovies(this.props.movieFilter);
    }
    
    render(){
        return(
            <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary">
                    <input type="radio" name="movieTypes" id={NOW_SHOWING}
                        onChange={this.onMovieTypeChange} className="btn active"
                        /> 
                    NOW RUNNING
                </label>
                <label className="btn btn-primary">
                    <input type="radio" name="movieTypes" id={COMING_SOON}
                        onChange={this.onMovieTypeChange}
                        value="false"
                        /> 
                    COMING SOON
                </label>
            </div>
        
        );
    }
}

function mapStateToProps(state) {
    return {
        movieFilter: state.movieFilter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch),
        fetchMovies: bindActionCreators(fetchMovies, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieType);