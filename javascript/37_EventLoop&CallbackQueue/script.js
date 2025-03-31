console.log("Hii-1");
debugger;


function intro(){
    console.log('I am Saurabh.');
}

for(let i=0;i<5;i++){
    console.log(i);
}

intro();


        // all of above are synchornous js codes as they execute line by line

 /*  (A).  Synchronous vs Asynchronous JavaScript :>

                    -> JavaScript is single-threaded, meaning it executes one task at a time in a synchronous manner by default. However, with the help of asynchronous programming, JavaScript can handle long-running tasks (e.g., API calls, timers, file I/O) without blocking execution.

        1️⃣ Synchronous JavaScript:- (a). executes line by line, one task at a time.
                                    (b). The next line waits until the current line finishes execution.
                                    (c).Blocking in nature. 

            🔹 Problem? If a task is slow (e.g., a large loop or network request), JavaScript freezes until it's done.

        2️⃣ Asynchronous JavaScript :- (a). Executes non-blocking operations.
                                       (b). Instead of waiting, JavaScript delegates tasks to Web APIs (e.g., setTimeout, fetch).
                                        (c). Uses Callbacks, Promises, and Async/Await.

               🔹 ex: setTimeout moves the callback to the Callback Queue, and the Event Loop picks it up after the main script finishes execution.






    (B). In JavaScript, the Event Loop and Callback Queue are key components of the asynchronous execution model, which allows JavaScript to handle non-blocking operations efficiently. Let's break them down:

1. Event Loop
            The Event Loop is responsible for managing asynchronous operations in JavaScript. It continuously checks whether there are any tasks in the Callback Queue that need to be executed. It follows this cycle:

                                :>   Check Call Stack: If the call stack is empty, move to the next step.
                                :>    Check Callback Queue: If there are pending callbacks in the queue, dequeue the first one and push it onto the call stack.
                                :>    Execute the Callback: The callback function runs and completes execution.
                                :>    Repeat: This process continues indefinitely.

            This ensures JavaScript remains non-blocking while handling asynchronous tasks like network requests, timers, and event listeners.

2. Callback Queue
           -> The Callback Queue (or Task Queue) is where callbacks from asynchronous operations (e.g., setTimeout, setInterval, DOM events) are placed after their execution conditions are met. The Event Loop then picks up these callbacks and executes them when the call stack is empty.

            -> JavaScript has two types of queues:

                        :> Microtask Queue (Priority Execution):
                                                > Includes Promises, process.nextTick (Node.js), and MutationObserver.
                                                > Microtasks are executed before macrotasks, right after the current function execution.
                            
                        :> Macrotask Queue (Lower Priority):

                           > Includes setTimeout, setInterval, setImmediate, and I/O operations.
                           > Executed after microtasks are completed.

3. WebApis             
            Web APIs are browser-provided features that enable JavaScript to handle asynchronous operations like timers, HTTP requests, DOM manipulation, and more. These APIs operate outside the JavaScript engine (V8, SpiderMonkey, etc.) but interact with it through the Event Loop.


    ** How Web APIs Work with Event Loop & Callback Queue??

            (a). JavaScript sends a request to the Web API (e.g., setTimeout, fetch, DOM events).
            (b). Web API processes the request asynchronously (without blocking JavaScript execution).
            (C). When the operation is complete, the Web API sends the callback function to the appropriate queue:
                        :> Microtask Queue (for Promises, MutationObserver, process.nextTick in Node.js).
                        :> Macrotask Queue (for setTimeout, setInterval, setImmediate, I/O, UI events).
            (d). The Event Loop picks up the callback from the queue when the call stack is empty and executes it.        

*/


setTimeout( function() {
     console.log('Hi-3');
},0 );


console.log("Hii-2");
