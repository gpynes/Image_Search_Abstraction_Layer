const express = require('express'),
    Router = express.Router(),
    Helpers = require('../helpers'),
    errorHandler = (res) => (err) => {
        res.status(500)
        res.json({error: err})
    }


    Router.route('/imagesearch/:query')
        .get((req, res) =>
                Helpers.imageSearch(req.params.query, req.query.offset)
                    .then(res.json.bind(res))
                    .catch(errorHandler(res)))

    Router.route('/latest/imagesearch')
        .get((req, res) =>
            res.json(Helpers.fetchHistory()))

module.exports = Router