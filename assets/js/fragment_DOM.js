"use strict";

const myList = document.getElementById("list");

const arrayItem = ["Item 1", "Item 2", "Item 3", "Item 4"];

const fragmentList = document.createDocumentFragment();

arrayItem.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  fragmentList.appendChild(li);
});

myList.appendChild(fragmentList);
