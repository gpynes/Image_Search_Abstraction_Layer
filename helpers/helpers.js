const fetch = require('node-fetch'),
    config = require('../config')

const searchHistory = []
const imageSearch = (queryString, offset) => {
    searchHistory.unshift({
        term: queryString,
        when: (new Date(Date.now())).toISOString()
    })
    if (searchHistory.length > 10) {
        searchHistory.pop()
    }
    const query = queryString.split(' ').join('%20')
    offset = offset || 0
    console.log('Called', query)
    return fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&searchType=image&num=10&offset=${offset}&key=${config.custom_search.key}&cx=${config.custom_search.cx}`)
            .then(res => res.json())
            .then(res => res.items)
}


const fetchHistory = () => searchHistory

module.exports = Helpers = {
    imageSearch,
    fetchHistory
}