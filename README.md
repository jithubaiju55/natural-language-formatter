# Natural Language Formatter

A simple Node.js package to format JSON, numbers, dates, and lists in a natural language.

## Installation

```bash
npm install natural-language-formatter

npm install github:jithubaiju55/natural-language-formatter

usage

const { formatJSON } = require('natural-language-formatter');

const data = { name: 'Alice', age: 30, hobbies: ['reading', 'travelling'] };
console.log(formatJSON(data));

// Output:
// name: Alice
// age: 30
// hobbies: reading and travelling

const { formatDate } = require('natural-language-formatter');

const date = new Date('2023-01-01');
console.log(formatDate(date));

// Output: January 1, 2023


const { formatList } = require('natural-language-formatter');

const list = ['apples', 'bananas', 'oranges'];
console.log(formatList(list));

// Output: apples, bananas and oranges

```
