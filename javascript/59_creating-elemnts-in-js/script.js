const h1 = document.querySelector('h1')
const container = document.querySelector(".container")


// to create an element and add it in the program also including class,id and innerText using js only.

/*

const paragraph = document.createElement('p');

paragraph.innerText = 'this para is created using .createElement() in js.';

paragraph.classList.add('my-para');  // to add class of an element

paragraph.id = 'first-para';   // to give the id of an element.

container.appendChild(paragraph);

          
*/

                 // to generate many pokemon sprites using one img in html. 

/*

const imz = document.querySelector('img'); // the image in html file.

for (let i = 2; i <=500; i+=2) {
     const newImz = imz.cloneNode();
     newImz.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
     container.append(newImz);
}

*/


        // but how to generate these sprites without any imz. to make clone in html.


// this is done using document.createElement() which is a method in JavaScript used to create a new HTML element dynamically using the DOM (Document Object Model). It does not insert the element into the document by itself — it just creates it. You have to manually append it to the DOM using methods like .appendChild() or .append().



// pokemon task using js only without any single img in html.


/*

for (let i = 1; i <=500; i++) {

     const pokemonImg = document.createElement('img');

     pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

     container.append(pokemonImg);

}

*/




//  Also add a 'p' tag beneath each img providing it's number and both of img and number wrapped in a div for each sprite(img).


for (let i = 1; i <=500; i++) {
     
     const pokemonDiv = document.createElement('div');
     
     pokemonDiv.classList.add('img-container');

     const pokemonImg = document.createElement('img');

     pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

     const numPara = document.createElement('p');

     numPara.textContent = `${i}`;

     pokemonDiv.append(pokemonImg , numPara);

     container.append(pokemonDiv);

}

// or another short method but this method viz. used rare.
// in this we write the dynamic Html in a string and later append that string in the div.

/*

 for (let i = 1; i <=500; i++) {
     
     const pokemonDiv = document.createElement('div');
     
     pokemonDiv.classList.add('img-container');

     const myHTML = `
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"></img>
     <p>${i}</p>`;

     pokemonDiv.innerHTML = myHTML;  
        
     container.append(pokemonDiv);
        

}

*/




// or another method viz. used commonly at many places.
// here we insert in the innnerHtml of the 

/*

let myHTML = ``;

for( let i=1; i<=100; i++){
    myHTML += `
      <div class="img-container">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"></img>
           <p>${i}</p>
      </div>`;    
}

container.innerHTML = myHTML;

*/