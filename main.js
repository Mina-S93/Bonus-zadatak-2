let questions = document.querySelectorAll('.faq div p:first-child');

questions.forEach(q => q.addEventListener('click', () => {
   let sibling = q.nextElementSibling;                              //sibling element of question paragraf
   sibling.classList.toggle('block');                               //toggle block class (show/hide answer)
   q.lastElementChild.classList.toggle('arrow-transform');          //toogle arrow up and down
   q.classList.toggle('paragraf')                                   //change color of question
}))

let img = document.querySelector('img');

questions.forEach(q => q.addEventListener('mouseover', () => {      //move box left on mouseover
   img.classList.add('mouse');
}))

questions.forEach(q => q.addEventListener('mouseout', () => {      //move box in on mouseout
   img.classList.remove('mouse');
}))