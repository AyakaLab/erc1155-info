const KoaRouter = require('koa-router')

const MetaRouter = new KoaRouter()
const { getMetadata } = require('../controllers/metadata')

MetaRouter.get('/:id', getMetadata)

module.exports = MetaRouter