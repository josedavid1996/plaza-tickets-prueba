import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
const fs = require('fs')

// import { connectDB } from './data-source'
// import { initHandlers } from './handlers'
import { createWindow } from './main.window'
import { readDocument } from './utils/readDocument'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

let mainWindow: BrowserWindow | null = null

// connectDB()

ipcMain.on('saveData', (sender, data) => {
  let sData = JSON.stringify(data)
  if (!app.isPackaged) {
    fs.writeFileSync(
      path.join(app.getAppPath(), '../../src/main/data/data.json'),
      sData
    )
    console.log('Data Saved')
  } else {
    fs.writeFileSync(path.join(app.getAppPath(), '../data/data.json'), sData)
    console.log('Data Saved')
  }
})

ipcMain.handle('readDocument', (sender) => {
  return readDocument()
})

app.whenReady().then(() => {
  mainWindow = createWindow()

  // initHandlers(mainWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createWindow()
    }
  })
})

// Funcion para evitar evitar varias instancias de la app
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  // Create myWindow, load the rest of the app, etc...
  app.on('ready', () => {})
}
