
class LinkedList
{
    // _______________________________________________________ constructor
    // -

    /**
     * Linked List
     * @constructor
     * @param {*} values - List datas
     */
    constructor(...values)
    {
        this._head = null;
        this._tail = null;
        this._ln = 0;

        let length = this._ln = values.length;
        let head = null;
        let newNode;
        let i = 0;

        // Equivalent to Array(len)
        if(length === 1)
        {
            length = values[0];
            head = this._tail = newNode = new LLNode();
            for(i = 1; i < length; ++i)
            {
                newNode = new LLNode();
                newNode.next = head;
                head.prev = newNode;
                head = newNode;
            }
        }
        // Equivalent to Array(value0, value1, ..., valueN)
        else if(length > 1)
        {
            i = length - 1;
            head = this._tail = newNode = new LLNode(values[i--]);
            for(; i >= 0; --i)
            {
                newNode = new LLNode(values[i]);
                newNode.next = head;
                head.prev = newNode;
                head = newNode;
            }
        }

        this._head = head;
    }

    // _______________________________________________________ public
    // -

    toArray()
    {
        const array = new Array(this.length);
        this.forEach((el, index) => array[index] = el);
        return array;
    }

    /**
     * Get the list head
     */
    get head() { return this._head; }

    /**
     * Get the list tail
     */
    get tail() { return this._tail; }

    /**
     * Get the list length
     */
    get length() { return this._ln; }

    /**
     * Appends new elements to the list, and returns the new length of the list.
     * @param {*} values - Elements to insert at the end of the LinkedList.
     */
    push(...args)
    {
        const that = this,
            numArgs = args.length;

        let i = -1,
            arg,
            newNode;

        while(++i < numArgs)
        {
            arg = args[i];
            newNode = new LLNode(arg);
            newNode.prev = that._tail;

            if(that._tail)
            {
                that._tail.next = newNode;
            }
            else
            {
                that._head = newNode;
            }
            that._tail = newNode;
        }
        that._ln += numArgs;

        return that._ln;
    }

    /**
     * Remove the first element of the list and return it
     */
    shift()
    {
        const that = this;
        if(that._head)
        {
            const ret   = that._head.data;
            that._head  = that._head.next;
            --that._ln;
            that._head === null && (that._tail = null);
            return ret;
        }
        else
        {
            return undefined;
        }
    }

    /**
     * Remove the last element of the list and return it
     */
    pop()
    {
        const that = this;
        if(that._tail)
        {
            const ret     = that._tail.data;
            that._tail  = that._tail.prev;
            that._tail.next = null;
            --that._ln;
            that._tail === null && (that._head = null);
            return ret;
        }
        else
        {
            return undefined;
        }
    }

    /**
     * Inserts new elements at the start of an array.
     * @param {*} values - Elements to insert at the start of the LinkedList.
     */
    unshift(...args)
    {
        const that = this,
            numArgs = args.length;

        let i = -1,
            arg,
            newNode;

        while(++i < numArgs)
        {
            arg = args[i];
            newNode = new LLNode(arg);
            newNode.next = that._head;

            if(that._head)
            {
                that._head.prev = newNode;
            }
            else
            {
                that._tail = newNode;
            }
            that._head = newNode;
        }

        that._ln += numArgs;

        return that._ln;
    }

    /**
     * Loop through all values
     * @param {Function} fn - Function to call for each value
     */
    forEach(fn)
    {
        let node = this.head,
            i = -1;

        while(node)
        {
            fn(node.data, ++i);
            node = node.next;
        }
    }
}

class LLNode
{
    constructor(data = null)
    {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

export default LinkedList;
