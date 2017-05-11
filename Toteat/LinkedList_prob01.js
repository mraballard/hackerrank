// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    if (!head) {
        return false;
    };

    let currentNode = head,
        aggregateData = [];
    while (currentNode.next) {
        let loop = aggregateData.find(function(el) {
            return el == currentNode.data;
        });
        if (loop) {return true;}
        else {
            aggregateData.push(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}
