import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["webpack", "多入口打包文件1"], " ");

  return element;
}

document.body.appendChild(component());
