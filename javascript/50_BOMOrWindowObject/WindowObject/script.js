                                               // 1. Window.location

/* 
            📦 Common Properties of window.location
                
            Property	Description	             Example
            href	    Full URL	             https://example.com/page.html
            protocol	Protocol used	         https:
            hostname	Domain name	             example.com
            port	    Port number	             443 (for HTTPS)
            pathname	Path after the domain	 /page.html
            search	    Query string	         ?id=5&sort=asc
            hash	    Fragment identifier	     #section1
*/
                               
                                                // Use of Window.location.reload() or location.reload()

// location.reload();   // to reload the browser infinitely

/*

setTimeout( () => {
      location.reload();
}, 2000);

*/  // to reload the browser infinitely after every two seconds



                                                   // Use of location.herf

/*  🌐 What is location.href?
            :> location.href returns the complete URL of the current web page.

            :> It can also be used to redirect the browser to a different URL. 

*/                                


// Example: Getting the current URL

// console.log(window.location.href);   


// Example: Redirecting to another page

// window.location.href = "https://google.com";  // This navigates the browser to Google — it’s just like clicking a link.






                                                // 2. Window.history()
                                                
/*    🕘 What is window.history?

      :> window.history refers to the history object of the browser.

      :> It allows you to move backward, forward, or even manipulate the URL without reloading the page (using push and replace state).

      :> It works only within the same browser tab and same domain. 

*/    

console.log("the history length is :> ", history.length);  // This shows how many entries are in the session history (how many pages you've visited in this tab).


/*   
      // to Go back to previous page
      window.history.back();

      // to Go forward to next page (if any)
      window.history.forward();

      // to Go back 2 pages
      window.history.go(-2);

      // to Reload current page
      window.history.go(0);


*/



                                                // 3. Window.innerHeight,  Window.outerHeight, innerWidth, outerWidth

/*    
      🪟 window.innerHeight
              
                  :> Represents the height of the viewport in pixels.

                  :> Includes the visible content area, excluding toolbars, tabs, and browser borders.
      

      🪟 window.outerHeight
            
                  :> Represents the total height of the entire browser window.

                  :> Includes the viewport, tabs bar, address bar, toolbars, and window borders.

*/                                                

console.log("innerHeight of the browser :> ",innerHeight);

console.log("outerHeight of the browser :> ",outerHeight);






                                                // 4. window.open() method of Window object

      // The open() method of the window object is used to open a new browser window or tab.
      // it returns the window object of a tab.
      // Also, every tab has a separate window object of itself.
      
      // Syntax : window.open(URL, name, specs, replace);


      /* 📌 Parameters:

                  Parameter	                  Description
                  URL (optional)	           :> The web address to open. If omitted, it opens a blank page.
                  name (optional)	           :> The name of the new window. Can be _blank, _self, _parent, _top, or a custom name.
                                                  It is by default an empty string for any window ''.
                  specs (optional)	           :> A comma-separated string defining features of the new window (size, position, toolbars, etc).
                  replace (optional)	     :> A boolean. If true, the URL replaces the current entry in the history list. 
                  
      */

      // window.open("https://example.com", "_blank", "width=600,height=400");
                        // This will open example.com in a new tab or window with a size of 600x400 pixels.


                        



                                                  // 5. window.close() / close() of window object

      /* 🪟 window.close() :> The close() method is used to close the current browser window or a window opened by window.open().
                            :> It can also close a regular tab with only one page loaded with no navigation history and which is not embedded in another page .

         ⚙️ Behavior: a>. If you opened a window using window.open(), you can close it using close().

                       b>. If you try to call window.close() on the main browser tab (not opened via script) having some navigation history, most browsers will block it for security reasons.
      
      */          
     
      //  window.close();  //this is the syntax                





                                                   // 6. resizeBy() & resizeTo() 

      /*  🪟 resizeTo(width, height) :< Sets the exact width and height of the window.
             
             syntax : window.resizeTo(width, height);
          
          🪟 resizeBy(deltaX, deltaY) :< Changes the current size by a given amount (adds or subtracts pixels).

             syntax : window.resizeTo(800, 600);

             JavaScript automatically understands them as pixels.

          ⚠️ Important Notes:
                
            a.> These methods only work on windows that were opened via window.open().

            b.> They may be blocked by browsers or require permission (especially in modern browsers for security/usability).

            c.> May not work on tabs or windows that the user manually opened.  


            
            // ✔️ To allow resizing with resizeTo() or resizeBy(), include resizable=yes in the window.open() specs string

            let win = window.open("https://example.com", "_blank", "width=400,height=300,resizable=yes");

           // Later in code:
           win.resizeTo(600, 400); // ✅ Works if resizable=yes

      */          
     
        






                                                    // 7. moveTo(x,y), moveBy(dx,dy)

      /*
      
         🧲 window.moveTo(x,y) :>   

            Moves the top-left corner of the window to the specified screen coordinates.

            📌 Syntax: window.moveTo(x, y);

            x: Horizontal position (pixels from the left of the screen)

            y: Vertical position (pixels from the top of the screen)


          🧲 moveBy(x, y) :>
             
                  This method moves the browser window relative to its current position.

                  The position is relative, meaning it moves from wherever the window is now.

                  📌 Syntax: window.moveBy(x, y);

                  x → pixels to move horizontally (positive = right, negative = left)
                  y → pixels to move vertically (positive = down, negative = up)

            ⚠️ Note:> These methods only work on popup windows, not on the main browser window.
                
            **IMP.> If it’s a BOM method related to screen/window movement or size, use plain numbers (pixels by default). JavaScript automatically understands them as pixels.
                
            So, writing window.moveTo(100, 100) means: “Move the window to 100 pixels from the left, and 100 pixels from the top.”


      */                                              
                                                                





                                                      // 8. window.scroll(), Window.scrollBy(),Window.scrollTo()

      /*  🌀 The scroll() method is part of the BOM (specifically the window object), and it lets you scroll the web page to a specific position. 
      
           📌 Syntax: window.scroll(x, y);

           📦 Alternative: scroll() and scrollTo() are actually the same thing — both scroll to a specific position.

            :> If you want to scroll relative to the current position, use: scrollBy(x,y).

            :> same kind of x,y values are used like as move.

            :> ✨ Bonus: Smooth Scrolling by using scroll() :

                 -> You can also make the scroll smooth like butter 🧈:

                        window.scroll({
                              top: 500,
                              left: 0,
                              behavior: 'smooth'
                        });

      */
              


                        


                                                    // 9. window.print() or print() since, window is a global object.

      //  :> When you call window.print(): 👉 It opens the browser’s built-in print window (the same as pressing Ctrl + P)         
      
      




      

                                                    // 10. window.document() / DOM
      
      /*  📚 In Simple Words:
                              BOM = "Controls the browser"
                              DOM = "Controls the page"

                              DOM is part of BOM, and both work together to make websites dynamic. 
                              
      */                                              



                                              

      

