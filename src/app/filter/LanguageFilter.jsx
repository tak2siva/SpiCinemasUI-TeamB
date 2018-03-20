import { connect } from 'react-redux';
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import fetchMovies from './actions';
const LANGUAGES = [
	{ label: 'English', value: 'English' },
	{ label: 'Hindi', value: 'Hindi' },
	{ label: 'Tamil', value: 'Tamil' },
];



var LanguageFilter = createClass({
	
	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			stayOpen: true,
			value: [],
			rtl: false,
		};
	},
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},

	handleOnClose(value){
		console.log(typeof value, value);
		this.props.movieFilter.languages=value;
		console.log(this.props.movieFilter.languages);
		this.props.fetchMovies(this.props.movieFilter);
	},

	render () {
		const { disabled, stayOpen, value } = this.state;
		const options = LANGUAGES;
		return (
			<div className="section" style={{maxWidth: 200}}>
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Select your language(s)"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
					onClose={() => this.handleOnClose(value)}
				/>
			</div>
		);
	}
});

export default connect(
	(state) => {
		console.log(state);
		return {
			movieFilter: state.movieFilter
		}
	},
	(dispatch) => ({
    fetchMovies: (movieFilter) => dispatch(fetchMovies(movieFilter))
  })
)(LanguageFilter);