import nodeFactory from "./node";

const { createNode } = nodeFactory();

const linkedListFactory = () => {

    let head = null; // Initialise empty list

    const { createNode } = nodeFactory();

    const append = (value) => {
        const newNode = createNode(value);

        if (head === null){
            head = newNode;
        } else {
            let currentNode = head;
            while (currentNode.nextNode !== null){ // Tranverse along the LinkedList
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode; // at the end of the list then assign newNode
        };
    };

    const prepend = (value) => {
        const newNode = createNode(value, head);
        head = newNode; // Reassign head
    };

    const size = () => {
        let count = 0;
        let currentNode = head;
        while (currentNode !== null){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    const getHead = () => {
        return head;
    }

    const getTail = () => {
        if (head === null) {
            let currentNode = head;

            while (currentNode.nextNode !== null){
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    };

    const at = (index) => {
        if (index < 0) return null;

        let currentIndex = 0;
        let currentNode = head;

        while (currentNode !== null){
            if (currentIndex === index){
                return currentNode;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return null; // If Index out of range
    };

    const pop = () => {

        if (head === null) return null; // Empty list

        // Single element list
        if (head.nextNode === null){
            head = null; 
            return;
        };

        // More than 1 element
        let currentNode = head;
        while(currentNode.nextNode.nextNode !== null){
            currentNode = currentNode.nextNode;
        }
        // At 2nd last node
        currentNode.nextNode = null;
    };

    const contains = (value) => {
        let currentNode = head;
        while (currentNode !== null){
            if (currentNode.value = value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    };

    const find = (value) => {

        if (head === null) return null;

        let currentIndex = 0;
        let currentNode = head;
        while (currentNode !== null){
            if (currentNode.value === value){
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null; // No values found
    };

    const toString = () => {
        let currentNode = head;
        let result = '';

        while (currentNode !== null){
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }

        result += 'null' // For the last node;
        return result;
    };

    const insertAt = (value, index) => {
        if (index < 0 || index > size()){
            console.log("Index out of bounds");

            return;
        }

        if (index === 0){
            prepend(value);
            return;
        }

        const newNode = createNode(value);
        let currentNode = head;
        let currentIndex = 0;

        while (currentIndex < index - 1){ // we are aiming for the index before 
            currentNode = currentNode.nextNode;
            currentIndex++
        };

        // Reach to the node before index to be inserted and then reassign 
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
    };

    const removeAt = (index) => {
        if (index < 0 || index >= size()){
            console.log("Index out of bounds");
            return;
        }

        // Since initial head is index 0
        if (index === 0){
            head = head.nextNode;
            return;
        };

        let currentNode = head;
        let currentIndex = 0;

        while (currentIndex < index - 1){
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        // Reassign currentNode nextNode to skip
        currentNode.nextNode = currentNode.nextNode.nextNode;

    }

    return {
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

export default linkedListFactory;