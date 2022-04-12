const btnNewWindow = document.getElementById("add");
const btnClose = document.getElementById("close");

function newtaskwindow() {
  window.open("tasks.html", "_blank", "width=200,height=200");
}

function closeWindow() {
  window.close();
}

btnNewWindow.addEventListener("click", () => {
  newtaskwindow();
});

btnClose.addEventListener("click", () => {
  closeWindow();
});
