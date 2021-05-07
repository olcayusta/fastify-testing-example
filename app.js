'use strict'

const fastify = require('fastify')

function build(opts = {}) {
    const app = fastify(opts)
    app.get('/', async (req, res) => {
        return { hello: 'world' }
    })

    return app
}

module.exports = build