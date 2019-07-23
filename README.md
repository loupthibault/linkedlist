# Linked List

A Javascript Linked List library.

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/loupthibault/linkedlist/blob/master/LICENSE)

## Getting started

### Install
```
npm i @loupthibault/linkedlist
```

### Usage

```
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


# R
<br/>
[![npm version](https://img.shields.io/npm/v/@ariii/r.svg)](https://www.npmjs.com/package/@ariii/r) 
[![dev dependencies](https://img.shields.io/david/dev/ariiiman/r.svg)](https://www.npmjs.com/package/uglify-js)
[![minified size](https://img.shields.io/github/size/ariiiman/r/index.js.svg?label=minified%20size)](https://github.com/ariiiman/r/blob/master/index.js)
[![license](https://img.shields.io/github/license/ariiiman/r.svg)](https://github.com/ariiiman/r/blob/master/LICENSE)

A light JavaScript library.

## Installation

    $ npm install @ariii/r --dev

## Usage

Look at the [src](https://github.com/ariiiman/r/tree/master/src) folder for more information.

### Import

    import R from '@ariii/r'

### Return the body node of the document

    const body = R.Dom.body

### Add a click event listener

    R.L(element, 'a', 'click', callback)

### Check if a variable is an object

    const isObj = R.Is.obj(variable)

### Play animations with Merom

    const animation = new R.M({el: '#id', p: {x: [0, 600, 'px']}, d: 2000, e: 'io4'})
    animation.play()

    animation.play({p: {x: {newEnd: 50}}, reverse: true})

### Build sequences of Merom with Timeline

    const tl = new R.TL()
    tl.from({el: '#id0', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 300, e: 'i3', delay: 300})
    tl.from({el: '#id1', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 500, e: 'o6', cb: callback})

    tl.play()

    tl.pause()

## Author

[Aristide Benoist](https://www.aristidebenoist.com)

## License

[MIT](https://github.com/ariiiman/r/blob/master/LICENSE)

Copyright (c) 2019-present, Aristide Benoist.