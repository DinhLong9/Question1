const icon = document.querySelector(".icon-bar");

const listItem = document.querySelector(".listItem");

icon.addEventListener("click", () => listItem.classList.toggle("active"));
