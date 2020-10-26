<h1 align="center">ERC1155 Info Backend</h1>
<p align="center">The Backbone Server serves Metadatas for ERC1155 based NFT Cards</p>

<p align="center">
<img src="https://github.com/AyakaLab/erc1155-info/workflows/Dev%20Test/badge.svg" />
<img src="https://github.com/AyakaLab/erc1155-info/workflows/Production%20CI%20Test/badge.svg" />
</p>

> We aim to build a general ERC1155 metadata server that you can quickly deploy into all different project and aspect

### Features:

1. Metadata Builder API included, save time on building metadata
2. Development compatible for all purpose with nodemon hot reload
3. Koa2 based minified application to scale down any large application building time
4. Opening option for user to customize the usage of this project
5. No other database or addtional instance required, download and go
6. Fully supported Logger included powered by log4js

# Setup

## Dependency Installation

```bash
git clone https://github.com/AyakaLab/erc1155-info.git
yarn
# or
npm install
```

## Environment Preparation

```bash
yarn conf
# or
npm run conf
```

## Instance Setting

```bash
vim config.json
# or
nano config.json
```

1. Replace publicUrl to your domain
2. Change port to your free usable port number

## Create a new builder

```bash
touch src/builders/newBuilder.js
```

### Example Usage for Metadata Builder

```javascript
// Dependencies
const fs = require('fs')
const path = require('path')
const Log = require('../util/log')
const MetadataBuilder = require('../generator/metadataBuilder')

const config = require('../../config.json')

const dataArray = [
    {
        id: 1,
        name: "Level1",
        value: 100,
        level: 1,
        color: '#333333',
        nameZhCN: '一级物品',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Item1.png'
    },
    {
        id: 2,
        name: "Level2",
        value: 200,
        level: 2,
        color: '#333333',
        nameZhCN: '二级物品',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Item2.png'
    }
]

const HoeBuilder = {
    initItems() {
        const metdadataDir = path.resolve('./assets/metadata')
        
        for (let i = 0; i < hoeArray.length; i++) {
            const item = hoeArray[i]
            if (fs.existsSync(path.join(metdadataDir, item.id + '.json'))) return

            let attr = []
            attr.push(MetadataBuilder.attributesBuilder('Level', item.level))
            attr.push(MetadataBuilder.attributesBuilder('Type', 'default'))
            attr.push(MetadataBuilder.attributesBuilder('Ability', item.ability))
            attr.push(MetadataBuilder.attributesBuilder('Auction Base', item.value))
            attr.push(MetadataBuilder.attributesBuilder('Main Color', item.color))
            attr.push(MetadataBuilder.attributesBuilder('Name_CHN', item.nameZhCN))

            let body = MetadataBuilder.builder(
                config.publicUrl + '/' + item.id,
                item.image,
                item.name,
                '',
                attr
            )
            const location = MetadataBuilder.toJsonFile('', item.id, body)
            Log.trace(`Built JSON metadata for ${item.name} (id: ${item.id}) to ${location}`)
        }
    }
}

module.exports = HoeBuilder
```

### Included it in init.js

```javascript
const y3dHoe = require('./src/builders/y3dHoe')

/**
 * 初始化必要选项，比如 NFT 数据
 */
const init = () => {
    y3dHoe.initItems()
}

module.exports = init
```

## Start Instance

```bash
yarn start
```