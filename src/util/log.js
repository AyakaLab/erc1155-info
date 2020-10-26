// Dependencies
const log4js = require("log4js")

let SysTime = new Date()
let logTime = SysTime.getFullYear() + "-" + ("0" + (SysTime.getMonth() + 1)).slice(-2) + "-" + ("0" + SysTime.getDate()).slice(-2)
const coreLogFileName = `./logs/ERC1155Info-${logTime}.log`

log4js.configure({
    appenders: {
        Core: { type: "file", filename: coreLogFileName },
        console: { type: "console" }
    },
    categories: {
        ERC1155Info: { appenders: ["console", "Core"], level: "trace" },
        default: { appenders: ["console"], level: "trace" }
    }
})

let ERC1155InfoLogger = log4js.getLogger("ERC1155Info")

function info(log) {
    ERC1155InfoLogger.info(log)
}

function trace(log) {
    ERC1155InfoLogger.trace(log)
}

function debug(log) {
    ERC1155InfoLogger.debug(log)
}

function warning(log) {
    ERC1155InfoLogger.warn(log)
}

function fatal(log) {
    ERC1155InfoLogger.fatal(log)
}

function level(lev) {
    ERC1155InfoLogger.level = lev
}

module.exports = {
    info,
    trace,
    debug,
    warning,
    fatal,
    level
}