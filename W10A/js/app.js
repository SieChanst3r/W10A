//1. Query selector
var firstPTag = document.querySelector('p');

//2. query selector All
var allPTags = document.querySelectorAll('p');
for (var i = 0; i < allPTags.length; i++) {
    allPTags[i].innerHTML = "Im the p tag";
}

//3. get Element by Id
var firstPTag = document.getElementById("first-p");

//4. get element by class Name
var mainPTags = document.getElementsByClassName('content');

//5. get elements by tag name
var tagName = document.getElementsByTagName('h1');

//6. creat Element
var newBoiElement = document.createElement('p');
var parentElement = document.getElementById('parent');
parentElement.innerHTML += '<p> "Hello i am a new element."</p>';

//7. create text node


//8. remove child


//9. class list add, remove and toggle