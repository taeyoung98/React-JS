class ArrayUtilities {
  /* Your magic here */

  static addZeros = (numbers) => numbers.map((num) => num * 10);
  static moreThanFifty = (addZeros) => addZeros.filter((num) => num > 50);
  static removeFirst = (moreThanFifty) => moreThanFifty.slice(1);
  static sumAll = (noFist) => noFirst.reduce((accumulator, currentValue) => accumulator + currentValue);
  static divide = (sumAll) => Array.from(`${sumAll}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
