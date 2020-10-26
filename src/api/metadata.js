const KoaRouter = require('koa-router')

const MetaRouter = new KoaRouter()
const { getMetadata, getMetadataIdOnly } = require('../controllers/metadata')

MetaRouter.get('/:id', getMetadataIdOnly)
MetaRouter.get('/:set/:id', getMetadata)

module.exports = MetaRouter