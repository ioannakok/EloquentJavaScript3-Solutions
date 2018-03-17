// Exercise 4.1: The Sum of a Range
function range1(start, end, step) {
  let arrayOfNums = [];
  for(let i = start; i <= end; i++)
    arrayOfNums.push(i);

  return arrayOfNums;
}

function range2(start, end, step) {
  if(step == null)
    step = 1;
  let arrayOfNums = [];

  if(step > 0) {
  	for(let i = start; i <= end; i+=step)
      arrayOfNums.push(i);
  } else {
  	for(let i = start; i >= end; i+=step)
      arrayOfNums.push(i);
  }
  return arrayOfNums;
}

function sum(arrayOfNums) {
  let sum = 0;
  for(let i = 0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum;
}

// Exercise 4.2: Reversing an array
function reverseArray(array) {
  let newArray = [];
  for(let i = array.length - 1; i >=0; i--)
  	newArray.push(array[i]);

  return newArray;
}

function reverseArrayInPlace(array) {
  let loopLimit = Math.floor(array.length / 2);
  let lastIndex = array.length - 1;

  for(let i = 0; i < loopLimit; i++) {
  	temp = array[i];
    array[i] = array[lastIndex];
    array[lastIndex] = temp;
    lastIndex--;
  }
  return array;
}

// Exercise 4.3: A list
function arrayToList(array) {
	let list = null;
  	for(let i = array.length - 1; i >= 0; i--)
    	list = {value: array[i], rest: list};

  return list;
}

function listToArray(list) {
  let array = [];
	for(let element = list; element; element = element.rest)
    	array.push(element.value);

  return array;
}

function prepend(value, list) {
  return {value, rest:list};
}

function nth(list, number) {
  let array = listToArray(list);
  return array[number];
}

// Recursive nth function
function nth(list, number) {
	if(list == null)
      return undefined;
  else if(number == 0)
      return list.value;
  else
      return nth(list.rest, number - 1);
}

// Exercise 4.4: Deep comparison
function deepEqual(obj1, obj2) {
  if(obj1 === obj2)
    return true;

  if(obj1 == null || typeof obj1 != "object" ||
    obj2 == null || typeof obj2 != "object")
    return false;

  return compareObjects(obj1, obj2);
}

function compareObjects(obj1, obj2) {
  let keysObj1 = Object.keys(obj1);
  let keysObj2 = Object.keys(obj2);

  if(keysObj1.length != keysObj2.length)
    return false; 
    
  for(let key of keysObj1) {
    if(!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
      return false;
  }
  
  return true;
}