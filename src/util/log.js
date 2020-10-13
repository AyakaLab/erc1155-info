// Dependencies
const log4js = require("log4js")

let SysTime = new Date()
let logTime = SysTime.getFullYear() + "-" + ("0" + (SysTime.getMonth() + 1)).slice(-2) + "-" + ("0" + SysTime.getDate()).slice(-2)
const coreLogFileName = `./logs/DeBearBE-${logTime}.log`

log4js.configure({
    appenders: {
        Core: { type: "file", filename: coreLogFileName },
        console: { type: "console" }
    },
    categories: {
        DeBearBE: { appenders: ["console", "Core"], level: "trace" },
        default: { appenders: ["console"], level: "trace" }
    }
})

let DeBearBELogger = log4js.getLogger("DeBearBE")

function info(log) {
    DeBearBELogger.info(log)
}

function trace(log) {
    DeBearBELogger.trace(log)
}

function debug(log) {
    DeBearBELogger.debug(log)
}

function warning(log) {
    DeBearBELogger.warn(log)
}

function fatal(log) {
    DeBearBELogger.fatal(log)
}

function level(lev) {
    DeBearBELogger.level = lev
}

module.exports = {
    info,
    trace,
    debug,
    warning,
    fatal,
    level
}