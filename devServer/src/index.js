import _ from "lodash";
function component() {
  const element = document.createElement("div");
console.log(1333444111)
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello11", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
