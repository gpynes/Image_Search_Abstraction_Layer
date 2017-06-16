const dev = require('./dev')

module.exports = {
    custom_search: {
        key: process.env.CUSTOM_SEARCH_KEY || dev.custom_search_key,
        cx: process.env.CUSTOM_SEARCH_CX || dev.custom_search_cx
    }
}