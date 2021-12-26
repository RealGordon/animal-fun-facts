'use strict';
import { animals } from './animal.js';
//import  React  from 'react';
//import ReactDOM from 'react-dom';
const title="";
const showBackground =true;
const e = React.createElement;
const background=e("img", {alt:"ocean" ,src:"/images/ocean.jpg"});
const names=Object.getOwnPropertyNames(animals);

const images=new Array(names.length);
for(const [i,animal] of names.entries()){
images[i]=e("picture",{
key:animal,
className:"animal",
"aria-label": animal,
role: "button",

},
	e("source",{srcSet: animals[animal].image,type:"image/jpeg",media:"(min-width: 30px)"}),
	e('img',{
key:animal,
className:"animal",
alt:animal,
src: animals[animal].image,
"aria-label": animal,
role: "button",
//onClick: displayFact,
}
));
}


const animalFacts=e('div',null,
e("div",null,
  e("h1",null,(title.length!==0?title:'Click an animal for a fun fact'))),
e("div",null,(showBackground &&
  background),
  e('p',{ id:"fact"}),
  e("div" ,{className:"animals",onClick: displayFact},images),
));

function displayFact(e){
  const name=e.target.alt;
  const ranIndex=Math.floor(Math.random()*3);
const fact=animals[name].facts[ranIndex];
document.getElementById('fact').textContent=fact;
if (e.preventDefault) e.preventDefault();
return false;
}

ReactDOM.render(animalFacts
  ,document.getElementById("root")
);
