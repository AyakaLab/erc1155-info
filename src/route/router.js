// Dependencies
const KoaRouter = require('koa-router')

// Local Packages
const ImageRouter = require('../api/image')
const MetaRouter = require('../api/metadata')
const ContractRouter = require('../api/contract')

const router = new KoaRouter()

router.use('/image', ImageRouter.routes(), ImageRouter.allowedMethods())
router.use('/metadata', MetaRouter.routes(), MetaRouter.allowedMethods())
router.use('/contract', ContractRouter.routes(), ContractRouter.allowedMethods())

module.exports = router