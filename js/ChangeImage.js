const image_1 = document.getElementById('site_1');
const image_2 = document.getElementById('site_2');
const image_3 = document.getElementById('site_3');
const image_4 = document.getElementById('site_4');

var names = ['image_1.png', 'image_2.png', 'image_3.png'];

let Changer = setTimeout(function ChangerFunction(){
image_1.src = 'img/works/works1/' + names[Math.round(Math.random() * names.length - 0.5)];
image_2.src = 'img/works/works2/' + names[Math.round(Math.random() * names.length - 0.5)];
image_3.src = 'img/works/works3/' + names[Math.round(Math.random() * names.length - 0.5)];
image_4.src = 'img/works/works4/' + names[Math.round(Math.random() * names.length - 0.5)];

Changer = setTimeout(ChangerFunction, 2500);

}, 1500);
