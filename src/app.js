/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let one = ["the", "our"];
let two = ["great", "big"];
let three = ["jogger", "help"];
let ext = [".es", ".tal"];
console.log(ext);
window.onload = function() {
  document.querySelector("#resultado").innerHTML = `<ul>${generadorarray(
    one,
    two,
    three,
    ext
  )}</ul>`;
  //console.log("Hello Rigo from the console!");
};
function generadorarray(one, two, three, ext) {
  let resultado = [];
  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      for (let k = 0; k < three.length; k++) {
        for (let h = 0; h < ext.length; h++) {
          resultado.push(`<li>${one[i]}${two[j]}${three[k]}${ext[h]}</li>`);
          if (ext == ".es") {
            resultado.push(
              `<li color=blue>${one[i]}${two[j]}genial${ext[h]}</li>`
            );
          } else {
            resultado.push(`<li>${one[i]}${two[j]}elemen${ext[h]}</li>`);
          }
        }
      }
    }
  }

  let resultadofinal = resultado.join("<br/>");
  return resultadofinal;
}
