// Dependencies
const fs = require('fs')

let Metadata = {
    async getMetadata (ctx, next) {
        if (!ctx.params.id || !ctx.params.set) {
            ctx.status = 404
            ctx.body = { status: -1, message: 'missing params'}
        }
        if (ctx.params.id.indexOf('.json')) ctx.params.id = ctx.params.id.replace('.json', '')
        ctx.type = 'application/json'
        ctx.body = fs.createReadStream('./assets/metadata/' + ctx.params.set + '/' + ctx.params.id + '.json')
        await next()
    },
    async getMetadataIdOnly (ctx, next) {
        if (!ctx.params.id) {
            ctx.status = 404
            ctx.body = { status: -1, message: 'missing params'}
        }
        if (ctx.params.id.indexOf('.json')) ctx.params.id = ctx.params.id.replace('.json', '')
        ctx.type = 'application/json'
        ctx.body = fs.createReadStream('./assets/metadata/' + ctx.params.id + '.json')
        await next()
    }
}

module.exports = Metadata