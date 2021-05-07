'use strict'

const server = require('./app')({
    logger: {
        level: 'info',
        prettyPrint: true
    }
})

server.listen(3000, (err, adress) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})