// function findBinary(decimal, result){
//     if(decimal == 0){
//         return result
//     }

//     result = decimal % 2 + result
//     return findBinary(Math.floor(decimal/2), result)
// }

// let binary = findBinary(223, "")


// function recursiveSum(input){
//     if(input == 0){
//         return input
//     }

//     return input + recursiveSum(input - 1)
// }

// let sum = recursiveSum(10)
// console.log(sum)



// BINARY SEARCH

// function binarySearch(arr, target){
//     let midIndex = Math.floor(arr.length / 2)

//     if(target == arr[midIndex]){
//         return arr[midIndex]
//     }

//     if(target < arr[midIndex]){
//         return binarySearch(arr.slice(0, midIndex),target)
//     }

//     return binarySearch(arr.slice(midIndex, arr.length -1 ),target)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let target = 1
// let result = binarySearch(arr, target)
// console.log(result);


//MERGE SORT à faire

// function mergeSort(arr){
//     let mid = Math.floor(arr.length / 2) 
//     mergeSort(arr.slice(arr[0], arr[mid]))
//     mergeSort(arr.slice(arr[mid], arr[(arr.length -1)]))
// }

// function merge(){

// }



// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   // Exemple d'utilisation :
//   const node1 = new Node(42);
//   const node2 = new Node(27);
  
//   node1.next = node2;
  
//   console.log(node1.value); // Affiche 42
//   console.log(node1.next.value); // Affiche 27


class Node {
      constructor(val) {
        this.value = val;
        this.left = null; 
        this.rigth = null;

      }
    }


    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;



   function depthFirstSearch(root){
      if(root == null) return [];
      const leftValues = depthFirstSearch(root.left);
      const rightValues = depthFirstSearch(root.right);
      return [root.value, ...leftValues, ...rightValues]

    }

    depthFirstSearch(a);



    // traverser
    // trouver
    