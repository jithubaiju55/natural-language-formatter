function formatList(list) {
    if (!Array.isArray(list)) return 'Invalid list';
    return list.length <= 1
        ? list[0]
        : `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
}

module.exports = formatList;
