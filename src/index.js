import _ from "lodash";
// import { fnNijou } from "./utilities";
import * as utilities from "./utilities";

console.log(utilities.fnNijou(3));

const component = () => {
  const element = document.createElement("div");
  const array = ["hello", "webpack"];
  element.innerHTML = _.join(array, " ");
  return element;
};

document.body.appendChild(component());
