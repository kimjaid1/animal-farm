'use strict'

const form = document.getElementsByTagName('*')[0];
const label = document.createElement('label');
const input = document.createElement('input');
const submit = document.createElement('submit');
const fieldset = document.getElementById('first');
const content = document.createElement('textarea');


label.textContent = "Journal Entry:"
input.type = 'text';
input.id = "title";
input.name = 'input';
content.id = 'info';
content.name = "content";
submit.type = "submit";
content.rows = "10";
content.cols = "30";

fieldset.appendChild(label);
fieldset.appendChild(input);
fieldset.appendChild(content);
fieldset.appendChild(submit);

form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    var title = event.target.value;
    var content = event.target.content.value;

    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    h1.textContent = title;
    p.textContent = content;

    const formContent = document.getElementById('render');
    
}