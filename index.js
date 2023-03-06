//1
Mutating methods are those that modify the original array directly.

Here are five examples of mutating array methods:

push() - adds one or more elements to the end of the array
pop() - removes the last element from the array
splice() - adds or removes elements from an array at a specific position
reverse() - reverses the order of the elements in an array
sort() - sorts the elements in an array in place

Non-mutating methods return a new array without modifying the original.

Here are five examples of non-mutating array methods:

concat() - combines two or more arrays and returns a new array
slice() - returns a portion of an array as a new array
map() - creates a new array by applying a function to each element of an existing array
filter() - creates a new array containing elements that pass a given test
reduce() - applies a function to each element of an array and returns a single value.

//2
//2a
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push('Kotlin');
console.log(languages);
//2b
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.splice(2, 0, 'Java');
console.log(languages);
//2c
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.shift();
console.log(languages);
//2d 
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.unshift('Scala', 'Swift');
console.log(languages);
//2e
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.splice(3, 1, 'Go', 'Rust');
console.log(languages);
//3 
['apple', 'mango', 'orange']

//4
