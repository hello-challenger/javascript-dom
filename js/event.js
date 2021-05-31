// Onchange Event _____________________
function doChange(e) {
  console.log('onChange');
  console.dir(e);
}

// Onclick Event _______________________
function doClick(e) {
  console.log('Click Button');
  console.dir(e);
}

function doClickDiv(e) {
  console.log('Click Div');
  console.dir(e);
}


// Mouse Event _____________________

const mouseMove = document.querySelector(".mouseMove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
})

// Keypress Event _______________________

const keyPressContainer = document.querySelector(".keypress")
const key = document.getElementById("key")

const ring = () => {
  const audio = new Audio();
  audio.src = "/effect.mp3";
  audio.play();
}

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

if (e.key === "Enter") {
  keyPressContainer.style.background = "red";
  } else if (e.key === "i")  {
  keyPressContainer.style.background = "green";
  } else {
    keyPressContainer.style.background = "rgba(0,0,0,0.6)";
  }

  ring();
})

// Scroll Event _______________________

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=> {

if (window.scrollY > 120) {
  nav.style.top = "0";
} else {
  nav.style.top = "-50px";
}
})

// Form Event _______________________
const inputName = document.querySelector('input[type="text"]');
const inputId = document.getElementById("form")
const form = document.querySelector("form")
const select = document.querySelector("select");
let pseudo = "";
let language = "";

console.log(form);

inputId.addEventListener("input", (e)=> {
  pseudo = e.target.value;
})

select.addEventListener("input", (e)=> {
  language = e.target.value;
})

form.addEventListener("submit", (e)=> {
  e.preventDefault();

if (cgv.checked) {
document.getElementById("form").innerHTML = `
<h2>Pseudo : ${pseudo}</h2>
<h2>Language : ${language}</h2>
`;
} else {
  alert("Veuillez coser la case pour accepter les CGV");
 }

  console.log("Yes !");
})



