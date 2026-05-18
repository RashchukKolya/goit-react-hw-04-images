import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import css from './Searchbar.module.css';

import React from 'react';

const Searchbar = ({ formSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    formSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm_btn}>
          <CiSearch size={25} stroke="#3f51b5" />
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </header>
  );
};

export default Searchbar;
