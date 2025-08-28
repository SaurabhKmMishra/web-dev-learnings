const image = document.querySelector('img')
const button = document.querySelector('button')


const user = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};



/* JSON is valid JavaScript as long as you follow JSON rules — especially using double quotes only.

:> If you use single quotes ', it's valid JavaScript but invalid JSON and will throw an error in JSON parsing.

:> also we can't add ',' after the very last obj. property like as we keep in the js */

/*

fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then((json) => {
        console.log('got the data')
        console.log(json)
        userData = json

      });

*/
      
        // Using dog API

button.addEventListener('click', ()=> {

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((json) => {
        image.src = json.message
    });
});        
