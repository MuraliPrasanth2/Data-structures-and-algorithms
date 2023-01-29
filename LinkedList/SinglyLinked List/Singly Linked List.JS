class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }

    toString() {
        return this.value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty())
            this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    _getPrev(node) {
        if (node === null) return null;
        let prev = this.head;
        let current = this.head.next;
        while (current !== null) {
            if (current === node) return prev;
            prev = current;
            current = current.next;
        }
        return null;
    }

    pop() {
        if (this.isEmpty()) return undefined;

        const poppedNode = this.tail;

        if (this.length === 1) this.head = this.tail = null;

        if (this.length > 1) {
            const prevToLastNode = this._getPrev(this.tail);
            prevToLastNode.next = null;
            this.tail = prevToLastNode;
        }

        this.length--;
        return poppedNode;
    }

    unshift(value) {
        if (this.isEmpty()) return this.push(value);

        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    shift() {
        if (this.isEmpty()) return null;
        if (this.length === 1) return this.pop();
        const shiftedNode = this.head;
        this.head = this.head.next;
        shiftedNode.next = null;
        this.length--;
        return shiftedNode;
    }

    get(index) {
        const isIndexOutOfRange = index < 0 || index >= this.length
        if (isIndexOutOfRange) return null;

        const isIndexingLastItem = index === this.length - 1
        if (isIndexingLastItem) return this.tail;

        let current = this.head;

        for (let i = 0; i < index; i++)
            current = current.next;

        return current;
    }

    set(index, value) {
        const nodeToBeSet = this.get(index);

        if (!nodeToBeSet) return false;

        nodeToBeSet.value = value;
        return true;
    }

    insertAt(index, value) {
        const isIndexOutOfRange = index < 0 || index > this.length;
        if (isIndexOutOfRange) return false;

        const isInsertingAtTheEnd = index === this.length;
        if (isInsertingAtTheEnd) return this.push(value);

        const isInsertingAtTheBeginning = index === 0;
        if (isInsertingAtTheBeginning) return this.unshift(value);

        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.next = after;
        this.length++;

        return this;
    }

    removeAt(index) {
        const isIndexOutOfRange = index < 0 || index > this.length;
        if (isIndexOutOfRange) return false;

        const isRemovingAtTheEnd = index === this.length;
        if (isRemovingAtTheEnd) return this.pop();

        const isRemovingAtTheBeginning = index === 0;
        if (isRemovingAtTheBeginning) return this.shift();

        const before = this.get(index - 1);
        const nodeToBeRemoved = before.next;
        before.next = nodeToBeRemoved.next;
        nodeToBeRemoved.next = null;
        this.length--;

        return nodeToBeRemoved;
    }

    reverse() {
        if (this.isEmpty()) return this;



        let before = null;
        let current = this.head;
        let next = current.next;

        while (next !== null) {
            current.next = before;
            before = current;
            current = next;
            next = next.next;
        }
        current.next = before;

        const tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;

        return this;
    }

}


const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.reverse();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.unshift(1);
myLinkedList.unshift(2);
myLinkedList.unshift(3);
myLinkedList.unshift(4);
myLinkedList.unshift(5);
myLinkedList.unshift(6);
myLinkedList.unshift(7);
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();
myLinkedList.shift();