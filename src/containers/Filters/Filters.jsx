import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckBox from '../../components/CheckBox/CheckBox';

import "./Filters.scss"

const Filters = () => {
    return (
        <div className="Filters">
            <SearchBar />
            <div className="Filters__checkbox">
                <CheckBox name={'unresolved'} />
            </div>
        </div>
    );
}

export default Filters;