const { formatJSON, formatDate, formatNumber, formatList } = require('../src/index');


test('formatJSON formats a JSON object', () => {
    const data = { name: 'Alice', age: 30, hobbies: ['reading', 'travelling'] };
    expect(formatJSON(data)).toBe('name: Alice\nage: 30\nhobbies: reading and travelling');
});

test('formatDate formats date correctly', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('January 1, 2023');
});

test('formatNumber formats numbers with commas', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
});

test('formatList formats list naturally', () => {
    const list = ['apples', 'bananas', 'oranges'];
    expect(formatList(list)).toBe('apples, bananas and oranges');
});
