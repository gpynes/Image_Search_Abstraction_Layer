const express = require('express'),
    app = express()

// app.use(routes)

const server = app.listen(process.env.PORT || 8080, () => console.log(`Server listening on port: ${server.address().port}`))