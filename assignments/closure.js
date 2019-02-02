// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function parentFunc() {
  const a = 1;
  const s = 5;
  console.log(a * s);
  function innerFunc() {
    const b = 2;
    const c = 3;
    console.log(a + b + c + s);
    function anotherFunc() {
      console.log((a + b) + (c * s));
      function fourthFunc () {
        console.log(a * b * c * s);
      }
        fourthFunc();
    }
      anotherFunc();
  }
     innerFunc();
}

parentFunc();

// ===============More Complex Closure Setup=================

function parentFunc() {
  const a = 1;
  const s = 5;
  console.log(a * s);
  function innerFunc() {
    const b = 2;
    const c = 3;
    console.log(a + b + c + s);
    function anotherFunc() {
      console.log((a + b) + (c * s));
      function fourthFunc () {
        return a * b * c * s;
      }
      return fourthFunc();
    }
    return anotherFunc();
  }
   return innerFunc;
}

const equals = parentFunc();
console.log(equals());


// ==== Challenge 2: Create a counter function ====
const counter = () => {

    let count = 0;
    return function() {
      //count = count + 1;
      return ++count;
    }
  };
  
  const newCounter = counter();
  console.log(newCounter());
  console.log(newCounter());



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
