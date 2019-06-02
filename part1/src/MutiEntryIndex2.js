import _ from "lodash";
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["webpack", "多入口打包文件2"], " ");

  return element;
}

document.body.appendChild(component());
