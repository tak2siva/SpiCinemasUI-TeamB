import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as movieActions from './movieTypeActions';
import {bindActionCreators} from 'redux';
import {NOW_SHOWING, COMING_SOON} from './movieTypeActions'
import fetchMovies from "../movies/actions";
import './MovieType.css';

class MovieType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowShowingClicked: true,
            comingSoonClicked: false
        };
        this.onMovieTypeChange = this.onMovieTypeChange.bind(this);
        this.props.fetchMovies(this.props.movieFilter);
    }

    onMovieTypeChange(event) {
        this.changeMovieSelection(event.target.id);
        this.props.movieFilter.movieType = event.target.id;
        this.props.fetchMovies(this.props.movieFilter);
    }

    changeMovieSelection(selectionType) {
        if (selectionType === NOW_SHOWING) {
            this.setState({nowShowingClicked: true, comingSoonClicked: false});
        } else if (selectionType === COMING_SOON) {
            this.setState({nowShowingClicked: false, comingSoonClicked: true});
        }
    }

    render() {
        var nowShowingClass = this.state.nowShowingClicked ? 'click-state' : 'base-state';
        var comingSoonClass = this.state.comingSoonClicked ? 'click-state' : 'base-state';
        return (
            <div className="container-fluid button-group">
                <div className="btn-group" data-toggle="buttons">
                    <button type="button" name="movieTypes" id={NOW_SHOWING}
                               onClick={this.onMovieTypeChange} className={nowShowingClass}>
                        NOW RUNNING
                    </button>
                    <button type="button" name="movieTypes" id={COMING_SOON}
                            onClick={this.onMovieTypeChange} className={comingSoonClass}>
                        COMING SOON
                    </button>
                </div>
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
        fetchMovies: bindActionCreators(fetchMovies, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieType);