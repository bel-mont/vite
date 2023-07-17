export function createElem(tag, innerText) {
  const elem = document.createElement(tag);
  elem.innerText = innerText;
  // return elem;
  document.body.append(elem)
}