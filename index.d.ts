
export class LLNode {
    next?: LLNode;
    prev?: LLNode;
    data?: any;
    constructor(data?: any);
};

export default class LinkedList {

    head?: LLNode;
    tail?: LLNode;
    length?: number;

    constructor(values: any[]);

    getArray(): any[];
    push(args: any[]): number;
    unshift(args: any[]): number;
    shift(): any;
    pop(): any;
    forEach(fn: Function): void;
    getArray(): Array;
}