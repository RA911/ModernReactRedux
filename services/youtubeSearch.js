import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAxnIAZvYuwtrWWbhNQEls8VWOEFD16Gl4';

const publicAPI = {
    fetch: function(term, cb) {
        YTSearch({ key: API_KEY, term }, cb);
    }
};

export default publicAPI;