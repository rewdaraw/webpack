import _ from "lodash";
import * as utilities from "./utilities";
import "./style.css";

console.log(utilities.fnNijou(3));
// console.log(style);
// console.log(style.toString());

const component = () => {
  const element = document.createElement("div");
  const array = ["hello", "webpack"];
  element.innerHTML = _.join(array, " ");
  return element;
};

document.body.appendChild(component());
document.body.classList.add("haikei");
