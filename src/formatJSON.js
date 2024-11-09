const formatList = require('./formatList');

function formatJSON(data) {
    if (typeof data !== 'object' || data === null) return 'Invalid data';

    let result = '';
    for (let key in data) {
        if (Array.isArray(data[key])) {
            result += `${key}: ${formatList(data[key])}\n`;
        } else if (typeof data[key] === 'object') {
            result += `${key}:\n${formatJSON(data[key])}\n`;
        } else {
            result += `${key}: ${data[key]}\n`;
        }
    }
    return result.trim();
}

module.exports = formatJSON;
