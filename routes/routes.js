const express = require('express'),
    Router = express.Router()


    Router.route('/imagesearch').get((req, res) => res.json('Hello'))

    Router.route('/latest/imagesearch').get((req, res) => res.json('Hello1'))

module.exports = Router