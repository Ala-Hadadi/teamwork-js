const createElement = (name, content, classes) => {
  const element = document.createElement(name);
  element.textContent = content;
  element.classList.add(...classes);

  return element;
};

const selectedElement = (query) => {
  return document.querySelector(query);
};

export { createElement, selectedElement };
