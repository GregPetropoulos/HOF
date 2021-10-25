//HIGH ORDER FUNCTIONS BREAK DOWN
//METHOD
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
dog.dogDescription(); // Method being invoked by calling object.method

// FUNCTION
function add() {
  let x = 5;
  let y = 3;
  return x + y;
}
add(); // Invoke function returns 8

// CALLBACK
function dogContactList(findDog) {
  console.log('check contact list for name of dog ===>', findDog); //log to see result in console
}
function callMyDog(firstName, lastName, myCallback) {
  let dogName = `${firstName} ${lastName} `; // Assign variable to parameters
  myCallback(dogName); // Callback function passing in a parameter as a variable
}
callMyDog('bingo', 'smith', dogContactList); // Invoked function with call callback returns bingo smith

// HIGH ORDER FUNCTION
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

const primeValues = data.filter(isPrime); // Assigned a variable to the original array (data) and a High Order Function (filter) and we call back on the boolean function isPrime. The filter method will evaluate every number in the array and if it's true it will be returned into a new array.
console.log(primeValues); // returns a new array [3,5,7,9]

const multiplyPrime = data.filter(isPrime).reduce(multiply); // Chained the HOF reduce to multiply 3*5*7*9 right after the filter
console.log(multiplyPrime); //returns 945 which is the product of all prime numbers in the array

//Another example using forEach-----
const primeNumbers = data.forEach((item) => {
  const checkPrime = isPrime(item);
  checkPrime
    ? console.log(`${item} is a prime number`)
    : console.log(`${item} is NOT a prime number`);
});

//   HIGH ORDER ARRAY METHODS
const animals = [
  {
    species: 'dog',
    breed: 'lab',
    name: 'Fido',
    sex: 'F',
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
    sex: 'F',
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
    sex: 'M',
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
    sex: 'M',
    ageInMonths: 28,
    shots: false,
    color: 'brown',
    adopted: 'no',
    admissionDate: '7/4/21',
    releaseDate: ''
  }
];

// .forEach() loop through every species
animals.forEach((animalInArray) => console.log(animalInArray.species));

// .map() return the names of the animals and if adopted
const animalNames = animals.map((nameOfAnimal) => {
  return `${nameOfAnimal.name} is adopted ${nameOfAnimal.adopted}`;
});
console.log(animalNames);

// .filter() filter to see dogs only
const dogCheck = animals.filter((dogsOnly) => dogsOnly.species === 'dog');
console.log(dogCheck);

// .sort() sorting by age of animals oldest to youngest
const ageSort = animals.sort((a, b) =>
  a.ageInMonths < b.ageInMonths ? 1 : -1
);
console.log(ageSort);

// .reduce() Adding all animals weights together as running total
const animalLoad = animals.reduce(
  (total, animalsWeight) => total + animalsWeight.weight,
  0
);
console.log(animalLoad);

// COMBINED METHODS
// used map to to get all animals with current shots, then sorted by sex and filtered it to animals greater than 50lbs
const comboMethods = animals
  .map((animal) => (animal.shots ? animal : ''))
  .sort((a, b) => (a.sex === 'M' ? 1 : -1))
  .filter((animal) => animal.weight >= 50);

console.log(comboMethods);
