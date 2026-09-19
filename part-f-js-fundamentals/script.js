/* ============================================================
   ASSIGNMENT 1 · PART F - JAVASCRIPT FUNDAMENTALS
   ============================================================
   These are 10 short tasks. None of them need HTML/CSS - just
   write code below each task and check the results in your
   browser console (F12).

   How to work through each task:
     1. Read the task.
     2. Open the linked resource and read it (5 minutes, not more).
     3. Write your code / answer where it says TODO.
     4. Run it and see if the output matches what you expected.

   These exact topics come up ALL the time in beginner JS interviews,
   so understanding the "why", not just getting the code to run, is
   the real goal here.
   ============================================================ */


/* ------------------------------------------------------------
   TASK 1 - Data types
   Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

   JavaScript has 7 primitive types (string, number, boolean,
   undefined, null, bigint, symbol) and 1 non-primitive type (object,
   which arrays and functions also count as).

   TODO: Declare one variable for EACH of these 6 types:
   string, number, boolean, undefined, null, object (a simple {} is fine).
   Then log the type of each one using the `typeof` operator.
------------------------------------------------------------ */

// example to get you started:
let myString = "hello";
console.log(typeof myString); // "string"

// TODO: add the other 5 below



/* ------------------------------------------------------------
   TASK 2 - Primitive vs non-primitive (reference) types
   Resource: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

   Primitives are copied "by value" - copying them makes a totally
   independent copy. Objects/arrays are copied "by reference" - the
   copy points to the SAME thing in memory.

   TODO:
   1. Create a number variable `a`, then `let b = a;` then change `b`.
      Log both `a` and `b` - did changing b affect a?
   2. Create an object variable `obj1`, then `let obj2 = obj1;` then
      change a property on `obj2`. Log both `obj1` and `obj2` - did
      changing obj2 affect obj1? Explain in a comment WHY the two
      tasks behaved differently.
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 3 - Mutable vs immutable
   Resource: https://developer.mozilla.org/en-US/docs/Glossary/Mutable

   All primitives (strings, numbers, etc.) are immutable - you can't
   change them in place, only replace them. Objects and arrays ARE
   mutable - you can change their contents without creating a new one.

   TODO:
   1. Make a string `let str = "cat";` then try `str[0] = "b";` and
      log `str` afterward. Did it change?
   2. Make an array `let arr = ["cat"];` then do `arr.push("dog");`
      and log `arr`. Did IT change?
   Write a one-line comment explaining the difference you observed.
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 4 - Hoisting
   Resource: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

   BEFORE you run this code, write your prediction as a comment for
   what each console.log will print (or if it will error).
   Then uncomment it, run it, and see if you were right.

   -----
   console.log(a);   // your guess: ____
   var a = 5;

   console.log(b);   // your guess: ____
   let b = 5;
   -----

   TODO: paste the code above (uncommented) below, run it, and
   write one sentence explaining why var and let behave differently.
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 5 - "==" vs "==="
   Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

   TODO: For each pair below, WRITE YOUR PREDICTION as a comment
   (true or false) before running it, then log the real result and
   see if you were right.

     "5" == 5
     "5" === 5
     0 == false
     null == undefined
     null === undefined
     NaN == NaN
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 6 - var vs let vs const
   Resource: https://javascript.info/variables

   TODO: Fix the buggy code below so it logs 0, 1, 2 (each on its
   own line) instead of what it currently logs. You only need to
   change ONE word.

   for (var i = 0; i < 3; i++) {
     setTimeout(function () {
       console.log(i);
     }, 0);
   }

   Once it's fixed, write a one-sentence comment explaining why
   changing that word fixed it (hint: it's about "scope").
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 7 - Type coercion
   Resource: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

   TODO: Predict the output of each line below (write it as a
   comment), then log each one and check yourself.

     console.log("5" + 3);
     console.log("5" - 3);
     console.log("5" + 3 + 1);
     console.log(1 + 3 + "5");
     console.log(true + 1);
     console.log([] + []);
     console.log([] + {});
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 8 - Statically typed vs dynamically typed
   Resource: https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing

   This one is a written answer, not code.

   TODO: In 2-3 sentences (as a comment), explain what it means that
   JavaScript is "dynamically typed", and give one example of a
   statically typed language for comparison (e.g. Java, TypeScript, C).
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 9 - NaN
   Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

   TODO:
   1. Log the result of `0 / "cat"` - what type of value is it?
      (check with typeof)
   2. Log `NaN === NaN` - what do you get, and why is this
      considered unusual compared to every other value in JS?
   3. Log `isNaN("cat")` and `Number.isNaN("cat")` - they give
      DIFFERENT answers. Look up why in the resource above and
      explain it in a comment.
------------------------------------------------------------ */

// TODO



/* ------------------------------------------------------------
   TASK 10 - Passed by value vs passed by reference
   Resource: https://javascript.info/object-copy

   TODO:
   1. Write a function `addOne(num)` that does `num = num + 1;`
      Call it with a variable: `let x = 5; addOne(x);`
      Log `x` afterward - did calling the function change it?

   2. Write a function `addItem(arr)` that does `arr.push("new");`
      Call it with an array: `let list = ["a"]; addItem(list);`
      Log `list` afterward - did calling the function change it?

   Write a one-sentence comment explaining why the two functions
   behaved differently, connecting it back to what you learned in
   Task 2.
------------------------------------------------------------ */

// TODO
