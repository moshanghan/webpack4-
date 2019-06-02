
import {formatTime,handleString} from './utils'
function component() {
  const element = document.createElement("div");
  element.setAttribute('id','myDiv')
  // element.innerHTML = handleString('webpack')
  return element;
}

document.body.appendChild(component());

const elementTime = document.createElement("p");
elementTime.innerHTML = (formatTime(1559458156000));

document.getElementById('myDiv').appendChild(elementTime)
