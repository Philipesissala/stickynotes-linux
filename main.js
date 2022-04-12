const { app, BrowserWindow, ipcMain } = require("electron");
const windowManager = require("electron-window-manager");
const Renderer = require("electron/renderer");
const path = require("path");
const iconDir = "./src/icons/sticky.png";

require("electron-reload")(__dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 640,
    minWidth: 350,
    minHeight: 560,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: true,
    },
    icon: path.join(__dirname, iconDir),
  });

  win.loadFile("src/index.html");
  
};

app.whenReady().then(() => {
  createWindow();

  ipcMain.on("button-click", () => {
    console.log("olaaaa");
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
