export {appendChildrenList, get, getAll, Dom}
const appendChildrenList = (target, childrenList) => {
  if(!Array.isArray(childrenList)) return;
  childrenList.forEach((children) => {
    target.appendChild(children)
  })
};

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const Dom = (domType,propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};