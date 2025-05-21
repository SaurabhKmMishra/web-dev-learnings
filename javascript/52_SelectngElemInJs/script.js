// if we wants to change the url/src of the css file image, we need to do this much amount of work 

/*

document.body.children[5].children[2].children[4].src = 'https://imgs.search.brave.com/tiCWd988gNzBYtLO49rljhXeOhuE4qNWnH6QjUo02t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZ3JhbWl6LmNv/bS9zaXRlcy90dXRv/cmlhbDJwcm9ncmFt/L2ZpbGVzL2Nzcy1h/ZGRpbmctaW1hZ2Ut/aW4taHRtbC5wbmc';

*/

// another method of doing so using variable could be :>

let cssImgVarble = document.body.children[5].children[2].children[4];

cssImgVarble.src = 'https://imgs.search.brave.com/tiCWd988gNzBYtLO49rljhXeOhuE4qNWnH6QjUo02t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZ3JhbWl6LmNv/bS9zaXRlcy90dXRv/cmlhbDJwcm9ncmFt/L2ZpbGVzL2Nzcy1h/ZGRpbmctaW1hZ2Ut/aW4taHRtbC5wbmc';


// but both of the above methods are not effective when it comes to multi-level nestings hence dom provedes several properties to make it easier :> 


                // 1. document.getElementsByTagName('Tag');


console.log(document.getElementsByTagName('img')); // will print all  'img' tag elements. 

console.log(document.getElementsByTagName('img')[2]); // any specified tag element.


// Note: for the image tags only their is a property : document.images which displays all the image tags out there.

console.log(document.images);  // returns all img elements as HTMLCollection viz. a collection (array-like object) of HTML elements. it is not a real array (though it looks similar).



                // 2. document.getElementsByClassName('class-name')
    // used to select all the elements with the same common class name.            

const cssImage = document.getElementsByClassName('css-image');  

// const cssImage = document.getElementsByClassName('css-image')[0];  // we can get any specific image using this sytax.   


console.log("the images found using class selector : ", cssImage);



               // 3. document.getElementById('Id-name')

    // used to select an element with a unique id-name.

    // it only stores the very first matching id name whose val. is stored as selected element, even if we associate same id to multiple elements viz. not a good practice.
    
const jsImage = document.getElementById('js-img');
console.log("the element selected using id: ", jsImage);   



               // 4. document.querySelector(selector)

    // The document.querySelector() method in JavaScript is used to select the first element that matches a specified CSS selector.
               
    // selector: A CSS-style selector (like .class, #id, tag, etc.)

    //Returns the first matching element, or null if no match is found.
    
const imgElement = document.querySelector('.css-image');

console.log('element found with query selector with class name cssImage is : ', imgElement);

const jsElement = document.querySelector('#js-img');

console.log('element found with query selector with id name jsImage is : ', jsElement);

console.log('the very first p element is : ', document.querySelector('p'));





              // document.querySelectorAll(selector)
    
    // 🔹 document.querySelectorAll() is used to select all elements that match a specified CSS selector, and it returns a NodeList.  
    
    // selector: Any valid CSS selector (like .class, #id, tag, etc.)

    // Returns a NodeList of all matching elements.

    /* ⚠️ Note:
                (a). NodeList is not a real array, but you can still use .forEach() on it.

                (b). If you need a real array, you can convert it using Array.from() or [...nodeList].

    */

const allImgs = document.querySelectorAll('img');

console.log(allImgs);



                // we can also use attribute selector to select an element like as we select in css :> 

const rdMap = document.querySelector('[alt="javascript roadmap"]');
console.log(rdMap);


                // even we can select the nested ones

const unordLst = document.querySelector('ul li'); // the first list item of the unordered list is selected.
console.log(unordLst);    




            // IMP:>  we can also add querySelector to a particular element/section if we know that the target is nested inside the element.

const ul = document.querySelector('ul');   

const insideUl = ul.querySelector('.css-image'); // searches for the class inside the ul only and gives the matching class element viz. nested in the ul.  

const outsideUl = document.querySelector('.css-image');  // searches for the given class in whole html and returns the target element but it can't go to the nested ones.

console.log(insideUl);

console.log(outsideUl);


// NOTE : if we need to use a deep nested selector we can just click right on the element and select copy -> copyjsPath ad then use it as a selector.

// it gives a unique kind of selector but this method used rarely.

const frmwrkScnd = document.querySelector("body > ul > li:nth-child(3) > ol > li:nth-child(3) > p > i");

console.log(frmwrkScnd);



/*   
    :> Both HTMLCollection and NodeList are array-like objects that hold multiple DOM elements. But they have some key differences.
       
    :> If you're using .querySelectorAll(), you'll get a NodeList, and it’s easier to loop through.

    :> If you're using .getElementsByTagName() or .getElementsByClassName(), you're working with a live HTMLCollection.

*/



    // **TASK :> to change the all of the images url in the html using the javaScript



const allImages = document.querySelectorAll('img');

const imagesUrl = [
    'https://imgs.search.brave.com/fHV18q8jFIWbFZOEoSEy3QTDP90PzBNbShf-KmT58dY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc1/NTE1NDc1L3Bob3Rv/L21vdW50YWlucy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZTBUeGRxcG1ReGdT/WW9IaUI2RjZ4LVNM/c0xiSWVXN3lNM3dl/U0JOeVo1VT0',
    'https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=612x612&w=is&k=20&c=bhWtFolx4No9goa6zJMpAcP6FPPu0YW4AWJG4o9Fp0g=',
    'https://media.istockphoto.com/id/1415111727/photo/silhouette-of-hiker-in-the-mountains-at-sunset.jpg?s=612x612&w=is&k=20&c=dzL_VBS2b-lhMxnfQlgJ-By9x9WnvZLeZ-z4pKl73_I='
]

// Url change using basic method

/*

allImages[0].src = imagesUrl[0];
allImages[1].src = imagesUrl[1];
allImages[2].src = imagesUrl[2];

*/

// using for loop

/*

for(let i=0; i<allImages.length; i++){
    allImages[i].src = imagesUrl[i];
}

*/

// using forEach loop which can only be used on those who are 'nodelist' found by querySelectorAll() and not on 'HTMLCollection'.


allImages.forEach((imz, i)=> {
    imz.src = imagesUrl[i];
});



// And if we wants to use the forEach loop on those elements who are selected as the htmlcollection are needed to be converted into arrays using spread opearator i.e, by doing :> const allImages = [...document.querySelectorAll('img')];



