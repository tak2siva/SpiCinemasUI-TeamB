import React from 'react';
import MovieGrid from './movies/MovieGrid';
import MovieType from './filter/movieType/MovieTypeFilter';

const Home = () => (
  <div>
    <MovieType/>
    <MovieGrid />
  </div>  
);

Home.defaultProps = {};

export default Home;