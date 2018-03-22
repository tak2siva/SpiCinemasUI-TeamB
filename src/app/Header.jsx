import React from 'react';
import LanguageFilter from './filter/language/LanguageFilter';
const Header = () => (
  <div >
    <h1>Just Cinemas</h1>
    <LanguageFilter />
  </div >
);

Header.defaultProps = {};

export default Header;
 