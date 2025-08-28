const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

function randomColor(){
    const hexRange = "012346789ABCDEF";

    let randomClr = "#";

    for(let i = 0; i<6; i++){
        randomClr += hexRange[Math.floor(Math.random()*16)];
    }

    return randomClr;
}


let intervalId;

const startChangingcolor = function (){
    if(!intervalId){ // i.e, to avoid applying of multiple evt Listeners

        intervalId = setInterval( () => {

            document.body.style.backgroundColor = randomColor();
        
        },1000);
    }

};    

const stopChangingcolor = function (){

    clearInterval(intervalId);
    intervalId = null;

};    

start.addEventListener( 'click', startChangingcolor);

stop.addEventListener( 'click', stopChangingcolor );

