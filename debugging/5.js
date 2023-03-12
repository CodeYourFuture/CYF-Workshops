/*
This code contains more than one error. Can you find and fix the errors.
*/

let list1 = [1, 2, 3, 4, 5];
let list2 = [6, 7, 8, 9, 10,];

function mergeLists(list1, list2) {
  let mergedList = [];
  if (list1.length >= list2.length) {
    for (let i = 0; i < list1.length; i++) {
      mergedList.push(list1[i]);
      mergedList.push(list2[i]);
    }
    return mergedList;
  } else {
    return "error" + ":D";
  }
}

//Expected output: [1,6,2,7,3,8,4,9,5,10]
console.log(mergeLists(list1, list2));
