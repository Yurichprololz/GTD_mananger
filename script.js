let item;
document.body.addEventListener("dragstart", function (event) {
  if (!event.target.closest(".item")) return;
  item = event.target.closest(".item");
  event.target.classList.add("hold");
  event.target.innerHTML = "Ещё чуток осталось";
  setTimeout(() => event.target.classList.add("hidden"), 0);
});

document.body.addEventListener("dragend", function (event) {
  if (!event.target.closest(".item")) return;
  event.target.innerHTML = "Перетащи меня";
  event.target.className = "item";
});

document.body.addEventListener("dragover", function (event) {
  if (!event.target.closest(".placeholder")) return;
  event.preventDefault();
});

document.body.addEventListener("dragenter", function (event) {
  if (!event.target.closest(".placeholder")) return;
  event.target.closest(".placeholder").classList.add("hovered");
});

document.body.addEventListener("dragleave", function (event) {
  if (!event.target.closest(".placeholder")) return;
  event.target.closest(".placeholder").classList.remove("hovered");
});

document.body.addEventListener("drop", function (event) {
  if (!event.target.closest(".placeholder")) return;
  event.target.closest(".placeholder").classList.remove("hovered");
  event.target.append(item);
});
