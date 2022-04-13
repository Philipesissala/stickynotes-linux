const btnNewWindow = document.getElementById("add");
const btnClose = document.getElementById("close");

function newtaskwindow() {
  window.open(
    "tasks.html",
    "_blank",
    `width=320,height=320,minWidth=320,minHeight=320,frame=false, x=850, y=200`
  );

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