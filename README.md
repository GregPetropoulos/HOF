# HOF
# 5 Best High Order Array Methods in JavaScript


![cover_image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bi2w16iir5xk9rhfu4qn.jpeg)

---
## High Order Array Methods - TLDR
I assigned an `animals` variable to an array with objects, each object has a list of properties with key - values.
```javascript
const animals = [
  {
    species: 'dog',
    breed: 'lab',
    name: 'Fido',
    sex:"F",
    weight: 80,
    ageInMonths: 19,
    shots: true,
    color: 'tan',
    adopted: 'yes',
    admissionDate: '10/15/21',
    releaseDate: '10/21/21'
  },
  {
    species: 'cat',
    breed: 'maincoon',
    name: 'Sassy',
    weight: 23,
    sex:"F",
    ageInMonths: 6,
    shots: false,
    color: 'red',
    adopted: 'no',
    admissionDate: '12/12/20',
    releaseDate: ''
  },
  {
    species: 'dog',
    breed: 'bulldog',
    name: 'Chesty',
    weight: 100,
    sex:"M",
    ageInMonths: 36,
    shots: true,
    color: 'tricolor',
    adopted: 'yes',
    admissionDate: '10/1/21',
    releaseDate: '12/26/21'
  },
  {
    species: 'bird',
    breed: 'bald eagle',
    name: 'Bradley',
    weight: 16,
    sex:"M",
    ageInMonths: 28,
    shots: false,
    color: 'brown',
    adopted: 'no',
    admissionDate: '7/4/21',
    releaseDate: ''
  },
];
```

## 1) .forEach() Definition
A method that executes a function once for every element in the array and returns undefined. There is no early termination during the iteration, instead use *.find()*, *.some()*, *.every()*, *.findIndex()* to test. The .forEach() method is synchronous and does not wait for promises and is not chainable. A callback passed in can mutate the original array.

**.forEach() Example**
I only want to loop through the species and log it to the console.
```javascript
// .forEach() loop through every species
animals.forEach((animalInArray) => console.log(animalInArray.species));
```
 In the .forEach() loop no value is returned just a log of 

`dog`

`cat` 

`dog` 

`bird`


## 2) .map() Definition
A method that populates a new array with results from a function called on every element in the original array. If you are not returning values or using the newly created array avoid using .map().

**.map() Example**
I want the name of the animal and if it's adopted.
```javascript
// .map() return the names of the animals and if adopted 
const animalNames = animals.map(nameOfAnimal => {
    return `${nameOfAnimal.name} is adopted ${nameOfAnimal.adopted}`;
});
console.log(animalNames);
```

.map() returned an array with the name value and adopted value
```
["Fido is adopted yes", "Sassy is adopted no", "Chesty is adopted yes", "Bradley is adopted no"]
```

## 3) .filter() Definition
A new array is created with elements that have passed a test with a callback or function provided within the method. The test must return true or false.

**.filter() Example**
I only want to see all the dogs.

```javascript
// .filter() filter to see dogs only 
const dogCheck = animals.filter(dogsOnly => dogsOnly.species === "dog")
console.log(dogCheck)
```
.filter() returned an array with only the dog species
```
[
 {
   species: "dog", 
   breed: "lab", 
   name: "Fido",
   sex: "F", 
   weight: 80, 
…},
{
   species: "dog", 
   breed: "bulldog", 
   name: "Chesty", 
   weight: 100, 
   sex: "M",
 …}
]
```

## 4) .sort() Definition
An array _in-place_ being called on is sorted and returned (not a copy) in a default ascending order. Under the hood it changes each element into a string and compares their sequence. Best practice is to use sort with the shortest list possible, due to overhead.

Double digit dilemma, If .sort() is used in an array of numbers with double digits, then only the first digit is read, for example the number `50` converted into a string `"50"` only the five is evaluated so `"9"` is larger than `"50"`, use a compareFunction to fix this quirk. `.sort((a, b) => a - b );`

**.sort() Example**
I want to sort through animals in the order of their age
```javascript
// .sort() sorting by age of animal
const ageSort = animals.sort((a, b) => (a.ageInMonths < b.ageInMonths? 1: -1)
)
console.log(ageSort)
```

In .sort() the array is sorted from oldest to youngest by using a ternary operator inside .sort()

```
[
   {
    admissionDate: "10/1/21"
    adopted: "yes"
    ageInMonths: 36
    breed: "bulldog"
    color: "tricolor"
    name: "Chesty"
...},
   {
    admissionDate: "7/4/21"
    adopted: "no"
    ageInMonths: 28
    breed: "bald eagle"
    color: "brown"
    name: "Bradley"
...},
   {
    admissionDate: "10/15/21"
    adopted: "yes"
    ageInMonths: 19
    breed: "lab"
    color: "tan"
    name: "Fido"
...},
   {
    admissionDate: "12/12/20"
    adopted: "no"
    ageInMonths: 6
    breed: "maincoon"
    color: "red"
    name: "Sassy"
...}
]
```

## 5) .reduce() Definition
This powerful method takes in a callback with two parameters, a previous value and current value that run on each element in the array.

``` javascript
data.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
```
The previous value is the value return by the last iteration and the current value, analogous to a running total. The final out come is a single value. The last parameter is an initialValue to start the reduce method in the array or object (in our case 0). In some cases .reduce() can replace .filter(), and .map()

**.reduce() Example**
I want to create a running total of the animals combined weight

```javascript
// .reduce() Adding all animals weights together as running total
const animalLoad = animals.reduce((total, animalsWeight) => total + animalsWeight.weight, 0);
console.log(animalLoad);
```
In the .reduce() method two parameters performing a calculation and the third parameter started at 0. A single returned value of a number type 219

```
219
```

## Combined Methods Example
I want to see animals that have current shots, sorted by sex and I only want an animal greater than 50 pounds.

```javascript
// used map to to get all animals with current shots, then sort by sex with "F" at the top of the list and filtered it to animals greater than 50 lbs
const comboMethods = animals.map(animal => animal.shots? animal:'')
.sort((a, b) => a.sex === 'M'? 1:-1)
.filter(animal => animal.weight >= 50);

console.log(comboMethods);
```

Illustrative purposes of combination chaining HOF, could have been done without chaining.
```
[
  {
    admissionDate: "10/15/21"
    adopted: "yes"
    ageInMonths: 19
    breed: "lab"
    color: "tan"
    name: "Fido"
    releaseDate: "10/21/21"
    sex: "F"
    shots: true
    species: "dog"
    weight: 80
},
{
    admissionDate: "10/1/21"
    adopted: "yes"
    ageInMonths: 36
    breed: "bulldog"
    color: "tricolor"
    name: "Chesty"
    releaseDate: "12/26/21"
    sex: "M"
    shots: true
    species: "dog"
    weight: 100
}
```


## The long version….

### The five best High Order Array methods in JavaScript:

**.forEach()**
**.map()**
**.filter()**
**.sort()**
**.reduce()**

I will break down several topics, _arrays_, _methods_, _functions_, and _callbacks_ using ES6 notation to better understand the anatomy of High Order Array methods.


Array Definition
What is an array? The simple version is a list. Let's take a deeper dive, an array is a data structure that uses memory to organize elements of the same type in sequence to store a value independent of each other. Think of a loaf of bread (array) composed of slices of bread and each slice of bread stores a value.

![bread](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ymp9mgm0pnoycllo9qlm.jpeg)
 
If you created an array consisting of 10 values, each slice of bread would store an integer type in each one of the slices.

## What are High Order Functions?

### High Order Function (HOF) Definition
A function that can return a function or pass an argument that is a function. This is an abstraction layer that allows for a High Order Function to return **actions** (ex: _a function_) not just values like a callback.

### Advantages of HOF
1. No more loops or `.push()` or `.pop()` needed
2. Less code thats is easier for human readability
3. Original array remains intact and not mutated, a new array is created down the call stack

Let's break down a several more definitions with examples and will come back to High Order Functions.
 
## Method Definition
"A function that is a property of an object." According to the docs " An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects


**_Since a method is a function inside an object as property, developers often reference high order functions and high order methods meaning the same thing, they are interchangeable for this discussion._

**Method example:**

``` javascript
const dog = {
  id: 953,
  legs: 4,
  color: 'red',
  breed: 'doberman',
  months: 8,
  dogDescription: function () {
    return `${this.months} month old ${this.color} beautiful ${this.breed}`;
  } // Here is the method, a property with a value as a function in an object
};
dog.dogDescription(); // Method being invoked by calling object.method outside of the object
```
We have created an object called `dog` with properties describing the `dog` (object). The last property is the method
```javascript
dogDescription:function () {
return `${this.months} month old ${this.color} beautiful ${this.breed}`;
}
```
```
//returns "8 month old red beautiful doberman"
```

`dogDescription` is the key and value is an anonymous function that returns values for `months`, `color`, `breed`. I also used template literals for human readability in the console.

Notice we call `dog.dogDescription()`
outside of the dog object and it's the appropriate way to access built in JavaScript methods.

## Function Definition
"A function in JavaScript is similar to a procedure - a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

**Function example:**
```javascript
function add() {
  let x = 5;
  let y = 3;
  return x + y;
}
add(); // Invoke function returns 8
```
Simple function `add` is the name of the function and within the function I assigned local variables
 `x = 5` , `y = 3` 
with a return statement adding x + y. The add function is executed outside of the function. By definition we calculated a value with the input variables to return an output value, once it's called (invoked) we get a number type with a value of `8`.


Furthermore, functions being first class objects (_function objects_) have properties and methods that can be called on. Here is three ways a function can be used:

1. A function can be assigned as a variable.
2. A function can be treated like a value and passed as an argument into function (**Callback**)
3. A function can return a function (**High-Order Function**)


### Callback Side Note
*A callback function can seem similar to a high order function.*

## Callback Definition
A callback function per docs "a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action." https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

**Callback Example:**
```javascript
function dogContactList(findDog) {
  console.log('check contact list for name of dog ===>', findDog); //log to see result in console
}
function callMyDog(firstName, lastName, myCallback) {
  let dogName = `${firstName} ${lastName} `; // Assign variable to parameters
  myCallback(dogName); // Callback function passing in a parameter as a variable
}
callMyDog('bingo', 'smith', dogContactList); // Invoked function with call callback returns bingo smith
```
Essentially a callback is a function that returns a function that will return a value and in this case bingo smith. (Keep in mind a callback can be called inside a High Order Function.)


The `callMyDog` function passes three parameters `firstName`, `lastName`, `myCallback`. We will need to assign a variable to the `firstName` and `lastName` which is `dogName`, then pass `dogName` variable as a parameter into `myCallback` function. Now, by invoking `callMyDog` and passing the parameters bingo, smith `dogContactList` we have successfully console logged the callback function is working.

```
//result check contact list for name of dog ===> bingo smith
```


## More on HOF
Now that we covered some basic definitions we return to the anatomy of High Order Function. I want to check for prime numbers in array and return prime numbers only. I also want to multiply the consecutive prime numbers together. I will demonstrate `.filter()` and `.reduce()` to reveal the architecture.

```javascript
// simple example using ES6
const multiply = (a, b) => a * b; //simple multiply function

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } else if (num >= 2 && num % 2 === 0) {
    return false;
  }
  return true;
}; // Setup a function that is boolean and checking if the number is prime with true or false

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //random data in an array
```
In the example I only created two functions, a simple `multiply` function and `isPrime` , a boolean function with all the logic needed. I also created a variable called `data` and assigned an array with random numbers to it.

 I will assign a variable called `primeValues` to the original `data` array and a High Order Function `.filter()` and we call back on the boolean function `isPrime`. The filter method will evaluate every number in the array and if it's true it will be returned into a new array.
```javascript
const primeValues = data.filter(isPrime);
console.log(primeValues); // returns a new array of prime values[3,5,7,9]
```
By chaining on the reduce method we pass the `multiply` callback which will multiply all the prime values together. 


```javascript
const multiplyPrime = data.filter(isPrime).reduce(multiply); // Chained the HOF reduce to multiply 3*5*7*9 right after the filter method
console.log(multiplyPrime); //returns 945 which is the product of all prime numbers in the array
```


As a developer it's important to know how and when to use HOF in your application? Arrays are just list's and with help of a powerful HOF we can easily lessen our code and bugs, and increase our productivity.

### A few reasons to use utilize the HOF:

**.forEach()** I want to loop through the list and do something to each item.

**.map()** I want to loop through the list and do something to each item and create a new array.

**.filter()** I want to only see specific items of the array or object.

**.sort()** I want to sort a list in alphanumeric order.

**.reduce()** I want a running total of numbers in array.

In conclusion, your JavaScript game just got a little better and you have a basic understanding of how the best 5 High Order Array Methods work and when to utilize the appropriate method. A solid understanding of what is under the hood is when you really harness the power of HOF. Good Luck on your coding journey.



Sources
https://eloquentjavascript.net/05_higher_order.html
https://www.freecodecamp.org/news/the-javascript-array-handbook/
Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
Methods and Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
Callback
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


[Twitter](@GregoriosPetro1)

[Linkedin](https://www.linkedin.com/in/greg-petropoulos/)

[Portfolio](https://gregpetropoulos.dev/)

[Github](https://github.com/GregPetropoulos)
