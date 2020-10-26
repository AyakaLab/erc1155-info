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

## Start Instance

```bash
yarn start
```