/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

import './search-box.styles.css';

// eslint-disable-next-line import/prefer-default-export
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
