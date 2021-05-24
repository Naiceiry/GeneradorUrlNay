/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let uno = ["the", "our"];
let dos = ["great", "big"];
let tres = ["jogger", "racoon"];
window.onload = function() {
  document.querySelector("#resultado").innerHTML = `<ul>${generadorarray(
    uno,
    dos,
    tres
  )}</ul>`;
};
function generadorarray(uno, dos, tres) {
  let resultado = [];
  for (let i = 0; i < uno.length; i++) {
    for (let j = 0; j < dos.length; j++) {
      for (let k = 0; k < tres.length; k++) {
        resultado.push(`<li>${uno[i]}${dos[j]}${tres[k]}.com</li>`);
      }
    }
  }

  let resultadofinal = resultado.join("<br/>");
  return resultadofinal;
}
