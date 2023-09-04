// Array Console
const arrayConsole = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
console.log(arrayConsole);

// Array Index Number cheak
const indexNum = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
console.log(indexNum[3]);

// ArrayLength
const arrayLength = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
console.log(arrayLength.length);

// LoopArray 
const loopArray = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
for (i = 0; i < loopArray.length; i++);
console.log(i);

// Remove first Element 
const removeFirst = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
removeFirst.shift();
console.log(removeFirst);

// Remove last Element 
const removeLast = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
removeLast.pop();
console.log(removeLast);

// unshift => Last Add Array Element
const lastAdd = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
lastAdd.push("MOWSUMI");
console.log(lastAdd);

// unshift => first Add Array Element
const firstAdd = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
firstAdd.unshift("SHOHAG");
console.log(firstAdd);

// Change Array Index \
const arrayIndex = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
arrayIndex[3] = "SHOHAG";
console.log(arrayIndex);

// 2 Array Cancat 
const arry1 = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
const arry2 = [1, 4, 7, 9, 6];
const result = arry1.concat(arry2);
console.log(result);


// Maltipul Array Add 
const array1 = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
const array2 = [1, 4, 7, 9, 6];
const array3 = ["SHOHAG", "MOWSUMI", "BAPPY"];
const array4 = [90.60, 80, 50];
const total = array1.concat(array2, array3, array4);
console.log(total);

// Array Ar modde Onak glu Array thakle akta Array ar modde naya
const prant = [
    ["COROLA", "MARCITIS", "BMW", "VOLVO"],
    ["SHOHAG", "MOWSUMI", "BAPPY"],
    [90.60, 80, 50]
];
console.log(prant.flat());

// Array Type Cheak
const arrayType = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
console.log(Array.isArray(arrayType));

// Array Join
const arrayJoin = ["COROLA", "MARCITIS", "BMW", "VOLVO"];
console.log(arrayJoin.join(" ~ "));

