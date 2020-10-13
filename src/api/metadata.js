const KoaRouter = require('koa-router')

const MetaRouter = new KoaRouter()
const { getMetadata } = require('../controllers/metadata')

MetaRouter.get('/:set/:id', getMetadata)

module.exports = MetaRouter