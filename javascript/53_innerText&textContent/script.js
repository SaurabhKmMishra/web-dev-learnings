/*   
    Comparison of innerText vs textContent :>

    (1).🔹 textContent – Raw text (ignores CSS styles):> 

        a. Returns all the text, even if it's hidden by CSS (display: none, visibility: hidden, etc.).
        b. Faster than innerText, because it doesn’t care about styling or layout.
        c.  Doesn’t trigger a browser reflow.

    (2).🔹 innerText – Only visible text (style-aware):>
    
        a. Returns only the text visible to the user.
        b. Ignores content hidden with display: none, etc.
        c. Triggers a layout reflow, so it's slower.    

    🧠 Summary Table:

    Feature	                 textContent	     innerText
    Returns hidden text    	✅ Yes	           ❌ No
    Aware of CSS styles	    ❌ No	           ✅ Yes
    Includes line breaks	❌ No (raw text)	   ✅ Yes (as rendered)
    Performance	            ✅ Faster	       ⚠️ Slower (due to layout calculation)
    Best for...	         Code/data processing	  Text as seen by the user 
    
*/

const paragraph =  document.querySelector('p');

console.log(paragraph.innerHTML);

console.log(paragraph.innerText);

console.log(paragraph.textContent);

