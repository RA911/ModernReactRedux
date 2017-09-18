import React from 'react';
import SearchBar from '../containers/searchBar.js';
import CityList from '../containers/cityList.js';

const App = () => {
    return (
        <div>
            <SearchBar />
            <CityList />
        </div>
    );
}

export default App;