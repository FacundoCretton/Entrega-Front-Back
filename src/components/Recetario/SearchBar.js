import React, { useState } from 'react';
import { SearchContainer, SearchForm, SearchInput, SearchButton } from './SearchBarStyles';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Buscar receta..."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
