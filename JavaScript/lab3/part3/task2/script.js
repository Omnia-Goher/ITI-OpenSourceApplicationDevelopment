/*
1 - Array.prototype.copyWithin()
method shallow copies part of an array to another location in the same array and returns it without modifying its length. 
*/

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));

/*
2 - Array.prototype.every()
method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array2 = [1, 30, 39, 29, 10, 13];
const array3 = [1, 45, 39, 29, 10, 13];
console.log(array2.every(isBelowThreshold));
console.log(array3.every(isBelowThreshold));

/*
3 - Array.prototype.fill()
method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
It returns the modified array.
*/

const array4 = [1, 2, 3, 4];
console.log(array4.fill(0, 2, 4));
console.log(array4.fill(5, 1));
console.log(array4.fill(6));

/*
4 - Array.prototype.find()
method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.
*/

const array5 = [5, 12, 8, 130, 44];
const found = array5.find(element => element > 10);
console.log(found);

/*
5 - Array.prototype.flat()
method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

const array6 = [0, 1, 2, [3, 4]];
console.log(array6.flat());
const array7 = [0, 1, 2, [[[3, 4]]]];
console.log(array7.flat(3));

/*
6 - Array.prototype.join()
method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator.
*/

const array8 = ['Fire', 'Air', 'Water'];
console.log(array8.join());
console.log(array8.join(' '));
console.log(array8.join('-'));

/*
7 - Array.prototype.reverse()
method reverses an array in place and returns the reference to the same array, the first array element now becoming the last,
and the last array element becoming the first. In other words, 
elements order in the array will be turned towards the direction opposite to that previously stated.
*/

const array9 = ['one', 'two', 'three'];
console.log('array:', array9);
const reversed = array9.reverse();
console.log('reversed:', reversed);

/*
8 - Array.prototype.some()
method tests whether at least one element in the array passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
It doesn't modify the array.
*/

const array10 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array10.some(even));

/*
9 - Array.prototype.splice()
method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
*/

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

/*
10 - Array.prototype.unshift()
method adds one or more elements to the beginning of an array and returns the new length of the array. 
*/

const array11 = [1, 2, 3];
console.log(array11.unshift(4, 5)); // length
console.log(array11);