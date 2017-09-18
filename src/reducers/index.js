import { combineReducers } from 'redux';
import Weather from './weather.js';

const rootReducer = combineReducers({
    weather: Weather
});

export default rootReducer;