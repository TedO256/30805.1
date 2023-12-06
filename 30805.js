//part1

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers));

  function averageArray(numbers) {
    const sum = sumArray(numbers);
    return sum / numbers.length;
  }
  
  console.log(averageArray(numbers));

  function longestString(strings) {
    return strings.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
  }
  
  
  const words = ['say', 'hello', 'in', 'the', 'morning'];
  console.log(longestString(words));

  function stringsLongerThan(strings, n) {
    return strings.filter((str) => str.length > n);
  }
  
  
  console.log(stringsLongerThan(words, 3));

  function printNumbersRecursive(n) {
    if (n > 0) {
      printNumbersRecursive(n - 1);
      console.log(n);
    }
  }
  
  printNumbersRecursive(5);


//part2

let dataArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  const sortedArray = dataArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  console.log("Sorted Array by Age:", sortedArray);
  

  const filteredArray = dataArray.filter(entry => parseInt(entry.age) <= 50);
  console.log("Filtered Array (age <= 50):", filteredArray);
  
 
  const mappedArray = dataArray.map(entry => ({
    ...entry,
    job: entry.occupation,
    age: (parseInt(entry.age) + 1).toString()
  }));
  console.log("Mapped Array (occupation to job, age + 1):", mappedArray);
  
  
  const sumOfAges = dataArray.reduce((sum, entry) => sum + parseInt(entry.age), 0);
  console.log("Sum of Ages:", sumOfAges);
  
  
  const averageAge = sumOfAges / dataArray.length;
  console.log("Average Age:", averageAge);


//part 3

let bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  obj.age++;
  obj.updated_at = new Date();
  return obj;
}

incrementAge(bilbo);
console.log(bilbo);

function copyAndIncrementAge(originalObj) {
  const objCopy = { ...originalObj };
  if (!objCopy.age) {
    objCopy.age = 0;
  }
  objCopy.age++;
  objCopy.updated_at = new Date();
  return objCopy;
}

let copiedBilbo = copyAndIncrementAge(bilbo);
console.log(copiedBilbo);