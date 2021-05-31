console.log('Hello getElementById');

// La vie d'une application
function doload() {
  alert("Cycle de vie d'une page Web");
}

var monH1 = window.document.getElementById('monTitre');
console.log(monH1);
console.log(monH1.innerHTML);

monH1.innerHTML = 'My Title attribué par un innerHTML';
