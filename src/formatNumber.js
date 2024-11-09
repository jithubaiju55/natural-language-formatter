function formatNumber(number, options = {}) {
    const { style = 'decimal', currency = 'USD' } = options;
    return new Intl.NumberFormat('en-US', {
        style,
        currency,
    }).format(number);
}

module.exports = formatNumber;
