// Dependencies
const fs = require('fs')

// Local Packages
const Log = require('../util/log')

let Image = {
    async getImage (ctx, next) {
        let params = ctx.request.params
        Log.debug(params)

        if (!ctx.params.id || !ctx.params.set) {
            ctx.status = 404
            ctx.body = { status: -1, message: 'missing params'}
        }

        const ext = ctx.params.id.split('.')[1]

        const types = {
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            gif: 'image/gif',
            webp: 'image/webp',
        }
    
        if (!types[ext]) {
            ctx.status = 406
            ctx.body = { status: -1, message: 'unsupported type requested' }
        }

        ctx.type = types[ext]
        ctx.body = fs.createReadStream('./assets/images/' + ctx.params.set + '/' + ctx.params.id)

        await next()
    }
}

module.exports = Image