// Local Packages
const fs = require('fs')
const path = require('path')
const Log = require('../util/log')

const metadataDir = path.resolve('./assets/metadata')
if (!fs.existsSync(metadataDir)) fs.mkdirSync(metadataDir)

const MetadataBuilder = {
    /**
     * 通过给定的参数构建 metadata 结构
     * @param {*} external_url      - 外部链接，访问该 metadata 的绝对地址
     * @param {*} image             - 图片链接，访问该图片资源的绝对地址
     * @param {*} name              - 名字，NFT Token 的名字
     * @param {*} description       - 简介，NFT Token 的简要介绍
     * @param {*} attributes        - 属性，NFT Token 的一些必要属性，总数为 7
     */
    builder(external_url, image, name, description, attributes) {
        let metadataStruct = {
            external_url: '',
            image: '',
            name: '',
            description: '',
            attributes: []
        }

        metadataStruct.external_url = external_url
        metadataStruct.image = image
        metadataStruct.name = name
        if (description) metadataStruct.description = description
        else metadataStruct.description = ''
        metadataStruct.attributes = attributes

        Log.info('构建了 metadata：' + JSON.stringify(metadataStruct))
        return metadataStruct
    },

    /**
     * 通过给定的参数构建 metadata 属性
     * @param {*} value1            - 属性键值名称，例如 Level, Type, Value, Main Color, Max Supply, Name in Localized system
     * @param {*} value2            - 属性的值名称
     */
    attributesBuilder (value1, value2) {
        let body = {}
        Object.defineProperty(body, 'trait_type', {
            value: value1,
            writable: true,
            enumerable: true
        })
        Object.defineProperty(body, 'value', {
            value: value2,
            writable: true,
            enumerable: true
        })
        Log.info('构建了 metadata 属性：' + JSON.stringify(body))
        return body
    },

    /**
     * 通过给定的参数创建指定 NFT id 的文件
     * @param {*} setName           - NFT 卡包 ID，可为空值
     * @param {*} nftId             - NFT ID，json 的文件名，也是响应的 id
     * @param {*} metadata          - 填入的 metadata 数据
     */
    toJsonFile(setName, nftId, metadata) {
        const setDir = path.resolve(path.join(metadataDir, setName))
        if (!fs.existsSync(setDir)) fs.mkdirSync(setDir)
        fs.writeFileSync(path.join(setDir, nftId + '.json'), JSON.stringify(metadata))
        return path.join(setDir, nftId + '.json')
    }
}

module.exports = MetadataBuilder