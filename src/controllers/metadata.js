// Dependencies
const fs = require('fs')

// Local Packages
const Log = require('../util/log')

let Metadata = {
    async getMetadata (ctx, next) {
        let params = ctx.request.params
        Log.debug(params)
        if (!ctx.params.id || !ctx.params.set) {
            ctx.status = 404
            ctx.body = { status: -1, message: 'missing params'}
        }
        ctx.type = 'application/json'
        ctx.body = fs.createReadStream('./assets/metadata/' + ctx.params.set + '/' + ctx.params.id)
        await next()
    }
}

module.exports = Metadata