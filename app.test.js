'use strict'

const { test, strictEqual } = require('tap')
const build = require('./app')

test(`requests the '/' route`, async (t) => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/'
    })
    
    strictEqual(response.statusCode, 200, 'returns a status code of 200')
})

/* const test = async () => {
    const app = build()

    const response = await app.inject({
        method: 'GET',
        url: '/'
    })

    console.log('status code', response.statusCode)
    console.log('body', response.body)
}

test() */