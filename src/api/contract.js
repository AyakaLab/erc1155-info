const KoaRouter = require('koa-router')

const ContractRouter = new KoaRouter()
const { getContract, getContractIdOnly } = require('../controllers/contract')

ContractRouter.get('/:id', getContractIdOnly)
ContractRouter.get('/:set/:id', getContract)

module.exports = ContractRouter