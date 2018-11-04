const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win;
  win = new BrowserWindow({});
  win.loadURL(`file://${__dirname}/dist/everything-app/index.html`);
}

app.on('ready', createWindow);

app.on('window-all-closed', app.quit);

