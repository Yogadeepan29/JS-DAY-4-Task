//! JS DAY-4 Tasks

//* TASK-1
console.log("                    TASK-1                     ");
console.log("");
//! a. Printing odd numbers in the array

// using anonymous function

var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log("Printed odd numbers using anonymous function : ",a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// using IIFE function


(function (arr) {
  var result1 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result1.push(arr[i]);
    }
  }
  console.log("Printed odd numbers using IIFE function : ",result1);
})([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//! b. Convert all the strings to title caps in a string array

// using anonymous function

var string = function (arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(" ");
};
console.log("Title caps in strings using anonymous function : ",string(["helLo tHIs IS yoga"]));

// using IIFE function

(function (arr) {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  console.log("Title caps in strings using IIFE function : ",data.join(" "));
})(["helLo tHIs IS deePAn"]);

//! c. Sum of all numbers in an array

// using anonymous function

var arrsum = [1, 2, 3, 4, 5];
var sum = function (arrsum) {
  var total = 0;
  for (let i = 0; i < arrsum.length; i++) {
    total += arrsum[i];
  }
  return total;
}(arrsum);
console.log("sum of all numbers in array using anonymous function",sum);

// using IIFE function

(function (arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("sum of all numbers in array using IIFE function : ",total);
})([6, 7, 8, 9, 10]);

//! d. Return all the prime numbers in an array

// using anonymous function

var arrprime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = function (arrprime) {
  var primes = [];
  for (var num of arrprime) {
    var isPrime = true;
    if (num === 1) {
      isPrime = false;
    } else {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
        }
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}(arrprime);
console.log("Return all prime numbers in an array using anonymous function : ",primeNumbers);

// using IIFE function

(function (arr) {
  var primes = [];
  for (var num of arr) {
    var isPrime = true;
    if (num === 1) {
      isPrime = false;
    } else {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
        }
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  console.log("Return all prime numbers in an array using IIFE function : ",primes);
})([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


//! e. Return all the palindromes in an array

// using anonymous function

var pd = function (arrpd) {
  var result3 = [];
  for (var i = 0; i < arrpd.length; i++) {
    var data = arrpd[i].split("").reverse().join("");
    if (data === arrpd[i]) {
      result3.push(arrpd[i]);
    }
  }
  return result3;
};
console.log("Return all the palindromes in an array using anonymous function : ",pd(["level", "dad", "mom", "water", "noon", "split", "java"]));

// using IIFE function

(function (arrpd1) {
  var result4 = [];
  for (var i = 0; i < arrpd1.length; i++) {
    var data = arrpd1[i].split("").reverse().join("");
    if (data === arrpd1[i]) {
      result4.push(arrpd1[i]);
    }
  }
  console.log("Return all the palindromes in an array using IIFE function : ",result4);
})(["civic", "radar", "motor", "gun"]);

//! f. Return median of two sorted arrays of the same size

// using anonymous function
var arrm1 = [1, 3, 5, 7];
var arrm2 = [2, 4, 6, 8];
var med = function (arrm1, arrm2) {
  let arr = [...arrm1, ...arrm2];
  //console.log("concatenate both array :", arr);
  arr.sort((a, b) => a - b);
 // console.log("sorted array :", arr);
  let n = arr.length;
 // console.log("array length :", n);
  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
};
console.log("median using anonymous function: ", med(arrm1, arrm2));

// using IIFE function

(function () {
  let arrm3 = [10, 12, 14, 16];
  let arrm4 = [11, 13, 15, 17];
  let arr = [...arrm3, ...arrm4];
  //console.log("concatenated array :", arr);
  arr.sort((a, b) => a - b);
  //console.log("sorted array :", arr);
  let n = arr.length;
  //console.log("array length :", n);
  if (n % 2 === 0) {
    console.log(
      "median using IIFE function : ",
      (arr[n / 2] + arr[n - 1] / 2) / 2
    );
  } else {
    console.log("median using IIFE function : ", arr[Math.floor(n / 2)]);
  }
})();

//! g. Remove duplicates from an array

// using anonymous function

var arrdup = [1, 2, 3, 4, 1, 2, 5, 6, 3, 7];
var duplicates = function (arrdup) {
  var result = [];
  for (let i = 0; i < arrdup.length; i++) {
    if (result.indexOf(arrdup[i]) === -1) {
      result.push(arrdup[i]);
    }
  }
  return result;
}(arrdup);
console.log("Remove duplicates using anonymous function : ",duplicates);

// using IIFE function

(function (arrdup1) {
  var result = [];
  for (var i = 0; i < arrdup1.length; i++) {
    if (result.indexOf(arrdup1[i]) === -1) {
      result.push(arrdup1[i]);
    }
  }
  console.log("Remove duplicates using IIFE function : ",result);
})([8, 7, 5, 4, 5, 8, 1, 1, 6, 2, 8, 5]);

//! h. Rotate an array by k times

// using anonymous function

var arrr1 = [1, 2, 3, 4, 5, 6];
var k = 6;
var rotarr = function (arrr1, k) {
  for (var i = 0; i < k; i++) {
    arrr1.push(arrr1[i]);
  }
  for (var j = 0; j < k; j++) {
    arrr1.shift();
  }
  return arrr1;
}(arrr1, k);

console.log("Rotate an array k times using anonymous function : ",rotarr);

// using IIFE function

(function (arr, k) {
  for (var i = 0; i < k; i++) {
    arr.push(arr[i]);
  }
  for (var j = 0; j < k; j++) {
    arr.shift();
  }
  console.log("Rotate an array k times using IIFE function : ",arr);
   })([6, 1, 2, 3, 4, 5], 6);

console.log("");
console.log("                       TASK-2                               ");
console.log("");



//* TASK-2

//! a. Printing odd numbers in the array

// using arrow function

var result2 = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result2.push(arr[i]);
    }
  }
  return result2;
};
console.log("Printed odd numbers using Arrow function : ",odd([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//! b. Convert all the strings to title caps in a string array

// using arrow function

var string3 = (arr) => {
  var res = arr.toString();
  var data = res.toLowerCase().split(" ");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(" ");
};
console.log("Title caps in strings using Arrow function : ",string3(["hElLo tHis IS yoGadEePAN"]));

//! c. Sum of all numbers in an array

// using arrow function

var arrsum2 = [11, 12, 13, 14, 15];
var sum2 = ((arrsum2) => {
  var total = 0;
  for (let i = 0; i < arrsum2.length; i++) {
    total += arrsum2[i];
  }
  return total;
})(arrsum2);
console.log("sum of all numbers in array using Arrow function",sum2);

//! d. Return all the prime numbers in an array

// using arrow function

var arrprime2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var primeNumbers2 = ((arrprime2) => {
  var primes = [];
  for (var num of arrprime2) {
    var isPrime = true;
    if (num === 1) {
      isPrime = false;
    } else {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
        }
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
})(arrprime2);
console.log("Return all prime numbers in an array using Arrow function : ",primeNumbers2);

//! e. Return all the palindromes in an array

// using arrow function

var palindrome = (arrpd2) => {
  var result5 = [];
  for (var i = 0; i < arrpd2.length; i++) {
    var data = arrpd2[i].split("").reverse().join("");
    if (data === arrpd2[i]) {
      result5.push(arrpd2[i]);
    }
  }
  return result5;
};
console.log("Return all the palindromes in an array using Arrow function : ",
  palindrome([
    "defined",
    "refer",
    "deed",
    "water",
    "malayalam",
    "split",
    "madam",
  ])
);
