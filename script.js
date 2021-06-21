document.body.addEventListener("dragstart", function (event) {
  if (!event.target.closest(".item")) return;
  event.target.classList.add("hold");
});

document.body.addEventListener("dragend", function (event) {
  if (!event.target.closest(".item")) return;
  event.target.classList.remove("hold");
});

document.body.addEventListener("dragstart", function (event) {
  if (!event.target.closest(".placeholder")) return;
  console.log("start");
});

document.body.addEventListener("dragend", function (event) {
  if (!event.target.closest(".placeholder")) return;
  console.log("end");
  event.preventDefault();
});

document.body.addEventListener("dragover", function (event) {
  if (!event.target.closest(".placeholder")) return;
  console.log("over");
});

document.body.addEventListener("drop", function (event) {
  if (!event.target.closest(".placeholder")) return;
  console.log("drop");
});
