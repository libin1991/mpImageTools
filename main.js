const { app, BrowserWindow } = require( 'electron' );

let mainWindow = null;


// 
const createWindow = () => {
  mainWindow = new BrowserWindow( {
    width: 1366,
    height: 768,
    center: true,
    webPreferences: { 
      nodeIntegration: true,
    }
  } );

  mainWindow.loadFile( './view/index/index.html' );

  mainWindow.on( 'closed', () => mainWindow = null );
};


// 事件

app.on( 'ready', createWindow );

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})