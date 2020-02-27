import React from 'react';
import { Input } from 'antd';

import './SearchBar.scss'

const { Search } = Input;

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </div>
    );
}

export default SearchBar;