//***PRINT CHILDREN RECURSIVE***

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

printChildrenRecursive = (tree, memo = {}) => {
    if(tree.children.length === 0){
        return
    }
    tree.children.forEach(children => {
        if (!memo[children.name]) {
            console.log(children.name)
            memo[children.name] = true;
            console.log(memo)
            printChildrenRecursive(children)
        }
    })
}

//printChildrenRecursive(tree);



//***REVERSE STRING***

reverseString = (input) => {
//what is the base case?
//when can i no longer continue?
//one letter || empty string
    if(input.length <= 1){
        return input 
    }

//what is the smallest amount of work i can do in each iteraction
    return reverseString(input.substring(1)) + input.charAt(0)
}

//reverseString('hello')
//reverseString('h')
//reverseString('')

// hello
// ello + h
// llo + e
// lo + l
// o + l
// o
// o + l
// ol + l
// oll + e
// olle + h
// olleh


//***IS PALINDROME***


isPalindrome = (input) => {
    // define the base case | stopping condition
    if(input.length <= 1){
        return true;
    }

    //what is the smallest amount of work i can do in each iteraction
    if (input.charAt(0) == input.charAt(input.length - 1)){
        return isPalindrome(input.substring(1, input.length - 1));
    }

    return false;

}

// kayak k = k true
// aya a = a true 
// y  length : 1 true
// true 
// true 
// true 


// console.log(isPalindrome('hello'))
// console.log(isPalindrome('h'))
// console.log(isPalindrome(''))
// console.log(isPalindrome('kayak'))


//***RECURSION SUMMATION***

recursiveSummation = (num) => {

//what is the base case?
    if(num <= 1){
    return num
    }

    return num + recursiveSummation(num - 1);
}

// 5 
// 4 
// 3 
// 2 
// 1

// 1
// 2 + 1 = 3
// 3 + 3 = 6
// 4 + 6 = 10
// 5 + 10 = 15


// console.log(recursiveSummation(5))



// DIVIDE AND CONQUER
// (1) Divide problem into several smaller subproblems
// Normally, The subproblems are similar to the original 

// (2) Conquer the subproblems by solving them recursively 
// Base case: solve small enough problems by brut force 

// (3) Combine the solutions to get a solution to the subproblems
// And finally a solution to the original problems 

// (4) Divide and conquer algorithme are normally recursive 


//***BINARY SEARCH***

function binarySearch(arr, target){
    let midIndex = Math.floor(arr.length / 2)

    if(target == arr[midIndex]){
        return arr[midIndex]
    }

    if(target < arr[midIndex]){
        return binarySearch(arr.slice(0, midIndex),target)
    }

    return binarySearch(arr.slice(midIndex, arr.length -1 ),target)
}

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let target = 3
// let result = binarySearch(arr, target)
// console.log(result);


//***FIBONACCI***

fibonacci = (input, memo = {}) => {
    if(input <= 1){
        return input
    }else if (memo[input]) {
        return memo[input];
    }else{
        memo[input] = fibonacci(input - 1, memo) + fibonacci(input - 2, memo);
        return memo[input];
    }
}

// f5 = 5
// f4 + f3 3 + 2
// f3 + f2 2 + 1
// f2 + f1 1 + 1
// f1 + f0 1 + 0 

// console.log(fibonacci(5))


//***REVERSE LINKED LIST***

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
// }


// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;


reverseLinkedList = (head) => {
    //what is the base case?
    if(head == null || head.next == null){
        return head 
    }

    //what is the smallest amount of work i can do in each iteraction
    let newHead = reverseLinkedList(head.next)
    head.next.next = head
    head.next = null
    return newHead 
}



// (1)-(2)-(3)-(4)-(5)


// head = (1)
// *
// *
// *
// head = 4
// newHead = (5)
// (4).(5).null = (4)        (1)->(2)->(3)->(4)<->(5)
// (4).(5) = (4).null        (1)->(2)->(3)->(4)<-(5)
// (5)

// head = 3
// newHead = (5)              
// (3).(4).null = (3)        (1)->(2)->(3)<->(4)<-(5)
// (3).(4) = (3).null        (1)->(2)->(3)<-(4)<-(5)
// (5)

// head = 2
// newHead = (5)             
// (2).(3).null = (2)        (1)->(2)<->(3)<-(4)<-(5)
// (2).(3) = (2).null        (1)->(2)<-(3)<-(4)<-(5)
// (5)

// head = 1
// newHead = (5)
// (1).(2).null = (1)        (1)<->(2)<-(3)<-(4)<-(5)
// (1).(2) = (1).null        (1)<-(2)<-(3)<-(4)<-(5)
// (5)

// console.log(node1)
// console.log(reverseLinkedList(node1))


//***MERGE TWO SORTED LINKED LIST***


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}


const node1 = new Node(1);
const node2 = new Node(8);
const node3 = new Node(22);
const node4 = new Node(40);


const node5 = new Node(4);
const node6 = new Node(11);
const node7 = new Node(16);
const node8 = new Node(22);


node1.next = node2;
node2.next = node3;
node3.next = node4;




node5.next = node6;
node6.next = node7;
node7.next = node8;


sortedMerge = (A, B) => {
    //what is the base case?
    if (A == null) return B
    if (B == null) return A


    //return le plus grand nombre apres le deuxieme nombre le plus grand
    if(A.value < B.value){
        A.next = sortedMerge(A.next, B)
        return A;
    } else {
        B.next = sortedMerge(A, B.next)
        return B
    }
}

console.log(sortedMerge(node1, node5))

// (1)-(8)-(22)-(40)
// (4)-(11)-(16)-(22)


// (1),(4)
// (8),(4)
// (8),(11)
// (22),(11)
// (22),(16)
// (22),(22)
// (22), null

// (22)-(22)-(40)
// (22)-(22)-(40)
// (16)-(22)-(22)-(40)
// (11)-(16)-(22)-(22)-(40)
// (8)-(11)-(16)-(22)-(22)-(40)
// (4)-(8)-(11)-(16)-(22)-(22)-(40)
// (1)-(4)-(8)-(11)-(16)-(22)-(22)-(40)
















