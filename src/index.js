// Import functions from their files
const formatJSON = require('./formatJSON');
const formatDate = require('./formatDate');
const formatNumber = require('./formatNumber');
const formatList = require('./formatList');

// Export the functions as part of the module
module.exports = {
    formatJSON,
    formatDate,
    formatNumber,
    formatList,
};
