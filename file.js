let newElement1 = document.createElement("section");
let newElement2 = document.createElement("section");
let newElement3 = document.createElement("section");
let newElement4 = document.createElement("section");
let newElement5 = document.createElement("section");
let newElement6 = document.createElement("section");
let newElement7 = document.createElement("section");
let newElement8 = document.createElement("section");

document.body.appendChild(newElement1);
document.body.appendChild(newElement2);
document.body.appendChild(newElement3);
document.body.appendChild(newElement4);
document.body.appendChild(newElement5);
document.body.appendChild(newElement6);
document.body.appendChild(newElement7);
document.body.appendChild(newElement8);

newElement1.append("This is section one");
newElement2.append("This is section two");
newElement3.append("This is section three");
newElement4.append("This is section four");
newElement5.append("This is section five");
newElement6.append("This is section six");
newElement7.append("This is section seven");
newElement8.append("This is section eight");

 newElement1.setAttribute("class", "sec");
 newElement2.setAttribute("class", "sec");
 newElement3.setAttribute("class", "sec");
 newElement4.setAttribute("class", "sec");
 newElement5.setAttribute("class", "sec");
 newElement6.setAttribute("class", "sec");
 newElement7.setAttribute("class", "sec");
 newElement8.setAttribute("class", "sec");

 let elements = document.querySelectorAll('.sec');

elements.forEach(element => {
  element.style.backgroundColor = 'brown';
  element.style.fontSize = '16px';
  element.style.height = '70px';
  element.style.width = '100vw';
  element.style.marginBottom = '20px';
  element.style.textAlign = 'center';
  element.style.color = 'white';
  element.style.padding = '20px';
});
