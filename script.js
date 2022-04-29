'use strict';

// TODO: assign `catButton` a value by selecting the button labeled `Make Cat` from the DOM

<<<<<<< HEAD
const chickenButton = document.getElementById('make-chicken');
chickenButton.addEventListener('click', function(){

  // TODO: assign `newCat a value by creating a new list item DOM element

  const newChicken = document.createElement('li');
  newChicken.textContent ='Chicken';

  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.

  const chickens = document.getElementById('chickens');

  chickens.appendChild(newChicken);
});

const pigButton = document.getElementById('make-pig');
pigButton.addEventListener('click', function () {
  const newPig = document.createElement('li');
  newPig.textContent = 'Pig';

  // TODO: assign `dogs` a value by selecting the second unordered list by its id
 
 const pigs = document.getElementById('pigs')
 pigs.appendChild(newPig)
=======
const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){

  // TODO: assign `newCat a value by creating a new list item DOM element

  const newCat = document.createElement('li');
  newCat.textContent ='Cat';

  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.

  const cats = document.getElementById('cats');

  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('li');
  newDog.textContent = 'Dog';

  // TODO: assign `dogs` a value by selecting the second unordered list by its id
 
 const dogs = document.getElementById('dogs')
 dogs.appendChild(newDog)
>>>>>>> 501ed61d817331c276af6e88309509a215465b6f

  // TODO: append the newly created list item to the dogs list
});

const sheepButton = document.getElementById('make-sheep');

sheepButton.addEventListener('click', handleMakingSheep) ;
// TODO: add an event listener to the sheepButton that calls `handleMakingSheep` when clicked
function handleMakingSheep (){


const newSheep = document.createElement('li');
newSheep.textContent ='Sheep';

const sheeps = document.getElementById('sheeps');
sheeps.appendChild(newSheep);


  // TODO: make a new list item, assign its text content to `Sheep` or the name of a sheep you know, and append it to the third unordered list.

}
const horseButton = document.getElementById('make-horse');
horseButton.addEventListener('click', handleMakingHorse) ;
function handleMakingHorse (){

  const newHorse = document.createElement('li');
  newHorse.textContent = 'Horse';

<<<<<<< HEAD
  const horses = document.getElementById('horses');
=======
  const horses =document.getElementById('horses');
>>>>>>> 501ed61d817331c276af6e88309509a215465b6f
  horses.appendChild(newHorse);
}

// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`

// TODO: write a function called `handleMakingHorse that makes a new list item, assigns its text content to `Horse` or the name of a horse you know, and append it to the fourth unordered list.
