# Linked List

A Javascript Linked List.

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/loupthibault/linkedlist/blob/master/LICENSE)

## Getting started

### Install
```sh
npm i @loupthibault/linkedlist
```

### Usage

```js
import LinkedList from '@loupthibault/linkedlist';


const array = [0, 1, 2, 3, 4, 5];

// Create Linkedlist
const linkedlist = new LinkedList();

// Add values to linked list
array.forEach((value) => linkedlist.push(value));

// Parse linked list
var node = linkedlist.head;

while(node) {
  console.log(node.data);
  node = node.next;
}

```

## License

[MIT](LICENSE).

Copyright (c) 2019-present, Loup-Rodolphe THIBAULT.