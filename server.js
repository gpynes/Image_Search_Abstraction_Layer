const express = require('express'),
    app = express(),
    routes = require('./routes')

app.use('/api', routes)

const server = app.listen(process.env.PORT || 8080, () => console.log(`Server listening on port: ${server.address().port}`))