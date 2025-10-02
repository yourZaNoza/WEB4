// разогревочные


function rectangleArea(a, b) {
    const S = a * b;
    console.log("Площадь прямоугольника со сторонами " + a + " и " + b + " = " + S);
}

function squarePerimeter(a) {
    const P = a * 4;
    console.log("Периметр квадрата со стороной " + a + " = " + P);
}

function FahrenheitTemperature(C) {
    const F = C * (9/5) + 32;
    console.log("Перевод температуры " + C + " С " + " => " + F + " F");
}

function divisionRemainder(a, b) {
    const d = a % b
    console.log(a + " % " + b + " = " + d);
}

function multiplation(a, b) {
    const c = a * b
    console.log(a + " * " + b + " = " + c);
}

function evenNumbers(a) {
    const d = a % 2;
    if (d == 0) {
        console.log("Число " + a + " четное");
    } else {
        console.log("Число " + a + " нечетное")
    }
}

function timeTranslator(h) {
    const m = h * 60
    console.log(h + " часа это " + m + " минут");
}

function numberCompare(a, b) {
    if (a > b) {
        console.log("Число " + a + " больше, чем " + b);
    } if (b > a) {
        console.log("Число " + b + " больше, чем " + a);
    } if (a == b) {
        console.log("Число " + a + " равно " + b);
    }
}

function userAge(a) {
    const age = 2025 - a
    console.log(age);
}

function summation(a, b) {
    const s = a + b
    console.log(a + " + " + b + " = " + s);
}


// циклы


function oneToTen() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.forEach((num) => {
    console.log(num);
  });
}

function oneToN(n) {
  let sum = 0;

  for (i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
}

function factorial(n) {
  let factorial = 1;

  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  console.log(factorial);
}

function evenPrinter() {
  let overNumber = 20;

  for (let i = 0; i <= overNumber; i += 2) {
    console.log(i);
  }
}

function multiplationOnFive() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
  }
}

function sumDivRemainderOnThree() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
  }

  console.log(sum);
}

function reverseCounter() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

function multyFromOneToN(n) {
  let first = 1;

  for (i = 1; i <= n; i++) {
    first = first * i;
  }

  console.log(first);
}

function divRemainderOnSeven() {
  for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
      console.log(i);
    }
  }
}

function symbolPrinter(symbol, n) {
  for (let i = 0; i < n; i++) {
    console.log(symbol + " " + i);
  }
}


// условия


function positiveOrNot(a) {
  if (a >= 0) {
    console.log(a + " - положительное");
  } else {
    console.log(a + " - отрицательное");
  }
}

function scalation(a) {
  if (a >= 90) {
    console.log(a + " баллов. Отлично");
  } else if (a >= 70) {
    console.log(a + " баллов. Хорошо");
  } else if (a >= 50) {
    console.log(a + " баллов. Удовлетворительно");
  } else {
    console.log(a + " баллов. Неудовлетворительно");
  }
}

function divisionByThree(a) {
  if (a % 3 == 0) {
    console.log(a + " кратно 3");
  } else {
    console.log(a + " не кратно 3");
  }
}

function evenOrNot(a) {

  if ((b = a % 2 == 0)) {
    console.log(a + " - четное");
  } else {
    console.log(a + " - не четное");
  }
}

function getCompare(a, b) {
    if (a > b) {
        console.log("Число " + a + " больше, чем " + b);
    } if (b > a) {
        console.log("Число " + b + " больше, чем " + a);
    } if (a == b) {
        console.log("Число " + a + " равно " + b);
    }
}

function visokosYear(a) {
  if (a % 400 == 0) {
    console.log(a + " год - високосный");
  } else {
    console.log(a + " год - не високосный");
  }
}

function temperatureCheck(a) {
  if (a < 18) {
    console.log("На улице " + a + "°С. Следует надеть куртку");
  } else {
    console.log("На улице " + a + "°С. Одевайтесь легко!");
  }
}

function divisionByFiveAndEleven(a) {
  if (a % 5 == 0 && a % 11 == 0) {
    console.log(a + " делится на 5 и 11");
  } else {
    console.log(a + " не делится на 5 и 11");
  }
}

function numberEquals(a, b) {
  if (a == b) {
    console.log(a + " и " + b + " равны");
  } else {
    console.log(a + " и " + b + " не равны");
  }
}

function checkSymbol(char) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (alphabet.includes(char)) {
        console.log(`Символ '${char}' — это буква!`);
    } else {
        console.log(`Символ '${char}' — это не буква!`);
    }
}


// массивы



function printEachElement(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}

function findFirstEven(arr) {
  const firstEven = arr.find(element => element % 2 === 0);
  console.log("Первый чётный элемент:", firstEven);
}

function addToEnd(arr, element) {
  arr.push(element);
  console.log("Массив после добавления:", arr);
}

function addToStart(arr, element) {
  arr.unshift(element);
  console.log("Массив после добавления:", arr);
}

function doubleArray(arr) {
  const doubled = arr.map(element => element * 2);
  console.log("Удвоенный массив:", doubled);
}

function removeLastElement(arr) {
  arr.pop();
  console.log("Массив после удаления:", arr);
}

function removeFirstElement(arr) {
  arr.shift();
  console.log("Массив после удаления:", arr);
}

function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2);
  console.log("Объединённый массив:", merged);
}

function removeByIndex(arr, index) {
  arr.splice(index, 1);
  console.log("Массив после удаления:", arr);
}

function extractSubarray(arr, start, end) {
  const subarray = arr.slice(start, end);
  console.log("Подмассив:", subarray);
}

function arrayToString(arr) {
  const str = arr.join(", ");
  console.log("Строка из массива:", str);
}

function stringToArray(str) {
  const arr = str.split("");
  console.log("Массив из строки:", arr);
}

function sumArray(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  console.log("Сумма элементов:", sum);
}

function increaseByTen(arr) {
  const increased = arr.map(element => element + 10);
  console.log("Массив после увеличения:", increased);
}

function findFirstNegativeIndex(arr) {
  const firstNegative = arr.find(element => element < 0);
  const index = arr.indexOf(firstNegative);
  console.log("Индекс первого отрицательного числа:", index);
}


// объекты


function createPerson() {
  const person = { name: "Зоя", age: 18 };
  console.log("Имя:", person.name, "Возраст:", person.age);
}

function addCity() {
  const person = { name: "Зоя", age: 18 };
  person.city = "Ростов-на-Дону";
  console.log("Объект с новым свойством:", person);
}

function removeAge() {
  const person = { name: "Зоя", age: 18 };
  delete person.age;
  console.log("Объект после удаления свойства age:", person);
}

function changeName() {
  const person = { name: "Зоя", age: 18 };
  person.name = "Анна";
  console.log("Объект после изменения имени:", person);
}

function hasProperty(obj, prop) {
  const result = prop in obj;
  console.log(`Свойство "${prop}" существует:`, result);
}

function getPropertyValue(obj, prop) {
  const value = obj[prop];
  console.log(`Значение свойства "${prop}":`, value);
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    console.log("Объекты не равны");
    return;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log("Объекты не равны");
      return;
    }
  }

  console.log("Объекты равны");
}

function iterateProperties() {
  const person = { name: "Зоя", age: 18, city: "Ростов-на-Дону" };
  for (let key in person) {
    console.log(`Свойство: ${key}, Значение: ${person[key]}`);
  }
}
