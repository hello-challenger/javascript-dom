console.log('Hello Window');
var innerHeight = window.innerHeight;
var innerWidth = window.innerWidth;

console.log(
  "Cet écran est d'une hauteur de " +
    innerHeight +
    " Pixels, et d'une largeur de " +
    innerWidth +
    ' Pixels.'
);

/*
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
*/

//console.log(window.open()); // - ouvrir une nouvelle fenêtre
//console.log(window.close()); // - ferme la fenêtre actuelle
//console.log(window.moveTo()); // - déplacer la fenêtre courante
//console.log(window.resizeTo(width, height)); // - redimensionner la fenêtre courante

window.onscroll = function () {
  var scrollY = window.pageYOffset || document.body.scrollTop;
  document.title = scrollY;
};

var form = window.document.forms['le_form'];
console.log(form);
var txt_nom = form.txt_nom;

var check_yes = form.check_yes;

console.dir(form);
console.dir(txt_nom.value);
console.dir(check_yes.value);
console.dir(check_yes.checked);
