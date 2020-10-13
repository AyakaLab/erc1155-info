// Dependencies
const fs = require('fs')

// Local Packages
const Log = require('../util/log')

let Metadata = {
    async getMetadata (ctx, next) {
        let params = ctx.request.params
        Log.debug(params)
        ctx.type = 'application/json'
        ctx.body = fs.createReadStream('./assets/metadata/' + ctx.params.id)
        await next()
    }
}

module.exports = Metadata