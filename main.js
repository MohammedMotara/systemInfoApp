const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  //create BrowserWindow
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon:__dirname+'/Assets/healthLogo.png' ,
    titleBarStyle: 'hiddenInset',
  })

//load index.html file
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //open devTools
  win.webContents.openDevTools();


  win.on('closed', () => {
    win = null;
  });

};

//Run create window function
app.on('ready', createWindow)

//Quit when all windows are closed. If statement here checks whether the user is on a mac or not.
app.on('windoe-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});


// Need to bring in a couple things from electron.
// Need to bring in the path module and the URL module. These are required to bring in the HTML file.
//The Global Win variable is required as the window will be closed automatically when the JS object has its garbage collected.
