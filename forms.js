'use strict'

const form = document.getElementsByTagName('*')[0];
const label = document.createElement('label');
const input = document.createElement('input');
const submit = document.createElement('input');
const fieldset = document.getElementById('first');
const content = document.createElement('textarea');

label.textContent = 'Topic';
input.type ="text";
input.id = "title";
input.name = "input"
content.id = "info"
content.name = "content"
content.rows ="5";
content.cols ="30";
submit.type = "submit";


fieldset.appendChild(label);
fieldset.appendChild(input);
fieldset.appendChild(submit);
fieldset.appendChild(content);


form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const title = event.target.value;
    const content = event.target.content;

    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = title;
    p.textContent = content;

    const formContent = document.getElementById('render');
    
    formContent.appendChild(h1);
    formContent.appendChild(p);

}

