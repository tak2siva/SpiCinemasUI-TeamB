import React from 'react';
import MovieGrid from '../movies/MovieGrid';
import MovieType from '../movieType/MovieType';

const Home = () => (
  <div>
    <MovieType/>
    <MovieGrid />
  </div>  
);

Home.defaultProps = {};

export default Home;