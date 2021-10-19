/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let one = ["the", "our"];
let two = ["great", "big"];
let three = ["jogger", "racoon"];
let ext = [".com", ".es", ".ue"];
window.onload = function() {
  document.querySelector("#resultado").innerHTML = `<ul>${generadorarray(
    one,
    two,
    three,
    ext
  )}</ul>`;
  //console.log("Hello Rigo from the console!");
};
function generadorarray(uno, dos, tres) {
  let resultado = [];
  for (let i = 0; i < uno.length; i++) {
    for (let j = 0; j < dos.length; j++) {
      for (let k = 0; k < tres.length; k++) {
        for (let h = 0; h < ext.length; h++) {
          resultado.push(`<li>${uno[i]}${dos[i]}${tres[i]}.com</li>`);
        }
      }
    }
  }

  let resultadofinal = resultado.join("<br/>");
  return resultadofinal;
}
