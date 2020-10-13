const KoaRouter = require('koa-router')

const ImageRouter = new KoaRouter()
const { getImage } = require('../controllers/image')

ImageRouter.get('/:set/:id', getImage)

module.exports = ImageRouter