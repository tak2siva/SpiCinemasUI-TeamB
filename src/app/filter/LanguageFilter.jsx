import { connect } from 'react-redux';
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import fetchMovies from '../../movies/actions';
import { fetchLanguages } from './actions';

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
		this.setState({ value });
	},

	handleOnClose(value){
		this.props.movieFilter.selectedLanguages=value;
		this.props.fetchMovies(this.props.movieFilter);
	},

	componentWillMount(){
		this.props.fetchLanguages();
 
	},

	render () {
		const { disabled, stayOpen, value } = this.state;
		const options = this.props.languages;
		return (
			<div style={{maxWidth: 300, marginLeft:'auto', marginRight:50}}>
				<div className="section" style={{maxWidth: 200, marginLeft:'auto'}}>
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
					/>
				</div>
				<span>
					<button style={{display: 'inline-block', float: 'right'}} onClick={() => this.handleOnClose(value)}>
					Search 
					</button>
				</span>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			movieFilter: state.movieFilter,
			languages: state.languages
		}
	},
	(dispatch) => ({
		fetchMovies: (movieFilter) => dispatch(fetchMovies(movieFilter)),
		fetchLanguages: () => dispatch(fetchLanguages())
  })
)(LanguageFilter);