import React from 'react';
import { Input } from 'antd';

import '../../components/SearchBar/SearchBar.scss'

import SearchBar from '../../components/SearchBar/SearchBar';
import CheckBox from '../../components/CheckBox/CheckBox';

import "./Filters.scss"
import { useDispatch } from 'react-redux';
import { getOnlyPendings, setTextFilter } from '../../actions/filters';

const { Search } = Input;


const Filters = () => {
    const dispatch = useDispatch()
    const setfilter = () => {
        dispatch(getOnlyPendings())
    }

    const setSearch = (text) => {
        dispatch(setTextFilter(text))
    }
    return (
        <div className="Filters">
            <div className="SearchBar">
                <Search placeholder="Search" onChange={e => setSearch(e.target.value)} enterButton />
            </div>
            <div className="Filters__checkbox">
                <CheckBox name={'Show only Pendings'} onChange={setfilter} />
            </div>
        </div>
    );
}

export default Filters;