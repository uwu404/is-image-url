'use strict';
const https = require("https");


function get(string) {
    const promise = new Promise((accept) => {

        https.get(string, (res) => {
            accept(res)
        })

    })

    return promise
}


/**
 * 
 * @param {string} string 
 * @returns {Promise<boolean>}
 */
async function isImageUrl(string) {
    if (!string.match(/http/gi)) return false

    const res = await get(string)
    const headers = res.headers
    if (!headers) return false

    const type = headers["content-type"]
    if (!type) return false

    if (type.match(/image/g)) return true

    return false
}

module.exports = isImageUrl;
