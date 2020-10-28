// Dependencies
const fs = require('fs')
const path = require('path')

const contractDir = path.resolve('./assets/contract')
if (!fs.existsSync(contractDir)) fs.mkdirSync(contractDir)

const ContractInfoBuilder = {
    builder (name, description, image, external_link) {
        let body = {
            name: name,
            description: '',
            image: image,
            external_link: external_link
        }
        if (description) body.description = description
        return body
    },

    toJsonFile(setName, contractName, infoData) {
        const setDir = path.resolve(path.join(contractDir, setName))
        if (!fs.existsSync(setDir)) fs.mkdirSync(setDir)
        fs.writeFileSync(path.join(setDir, contractName + '.json'), JSON.stringify(infoData))
        return path.join(setDir, contractName + '.json')
    }
}

module.exports = ContractInfoBuilder