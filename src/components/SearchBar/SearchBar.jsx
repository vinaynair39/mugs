import React from 'react';
import { Input } from 'antd';

import './SearchBar.scss'

const { Search } = Input;

const SearchBar = ({setSearch}) => {
    return (
        <div className="SearchBar">
            <Search placeholder="Search" onChange={e => setSearch(e.target.value)} enterButton />
        </div>
    );
}

export default SearchBar;