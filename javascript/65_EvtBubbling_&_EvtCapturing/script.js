const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


/*  
    🔁 Event Propagation Phases

    When you interact with an element (like clicking a button), the event goes through three phases:

    1. Capturing Phase (Trickling Down)
    The event starts from the window and goes down to the target element.

    2. Target Phase
    The event reaches the target element where the actual interaction happened.

    3. Bubbling Phase (Bubbling Up)
    The event then bubbles up from the target element to the top (window again), visiting ancestors on its way up.  
    
    
    
    🔵 Event Bubbling (Default)
    
    :> Events are first triggered on the target, then bubble up to its ancestors. i.e, 
            > When an event like a click happens on a child element, it bubbles up to its parent elements.
            
            > So if a parent has an event listener, it will also run after the child — unless you stop it.

    :> Most events bubble by default (click, focus, keydown, etc.).

    :> Handlers on parent elements can catch events from child elements unless the child calls stopPropagation().

*/




window.addEventListener('click', (e) => {
    console.log('1.window Evt Listener');
})

document.body.addEventListener('click', (e) => {
    console.log('2.body Evt Listener');
})

green.addEventListener('click', (e) => {
    console.log('3.Green Evt Listener');
})

pink.addEventListener('click', (e) => {
    console.log('4.pink Evt Listener');
})

blue.addEventListener('click', (e) => {
    console.log('5.blue Evt Listener');

})

// Above if we clicks on the pink div on web page it will trigger all of it's parent events as per the rule of event bubbling and the order of evts being triggered is : 5,4,3,2,1 b/c of evt bubbling.




              // 👉 Using {once:true}



/*

blue.addEventListener('click', (e) => {
    console.log('5.blue Evt Listener');

},{once:true})

*/

// Using once true tells the browser to run the event listener only once — after that, it will be automatically removed i.e, on Second click → nothing happens b/c (listener is removed)







/*  🛑 To stop propagation:
    Use event.stopPropagation() to stop it in either phase.
*/

/*

blue.addEventListener('click', (e) => {
    console.log('5.blue Evt Listener');
    e.stopPropagation(); // will stop the trigger of evts of parent containers.
})

*/



/*

   🔴 What is Event Capturing?

   :> Event Capturing is the first phase of event propagation in the DOM — where the event travels from the top (window/document) down to the target element.

   :> By default, event listeners listen in the bubbling phase, but you can listen during capturing by setting { capture: true } or true as the third argument in evtListener.

   :> by default value of capture is 'false'.


*/

/* 

window.addEventListener('click', (e) => {
    console.log('1.window Evt Listener');
});

document.body.addEventListener('click', (e) => {
    console.log('2.body Evt Listener');
},{capture:true})  // same as using true

green.addEventListener('click', (e) => {
    console.log('3.Green Evt Listener');
})

pink.addEventListener('click', (e) => {
    console.log('4.pink Evt Listener');
},true)

blue.addEventListener('click', (e) => {
    console.log('5.blue Evt Listener');

},true) 

*/


// Above, if we click on the blue div, the order of evts being triggered is : 2,4,5,3,1 b/c 2,4,5 are triggered during the capturing phase and 3,1 during the bubbling phase.