import { join } from 'path'
import { BrowserWindow, app } from 'electron'

export function createWindow() {
  const isDev = !app.isPackaged

  const win = new BrowserWindow({
    width: 1080,
    height: 1920,
    frame: false,
    resizable: false,
    transparent: true,
    maximizable: true,
    autoHideMenuBar: true,
    titleBarStyle: 'customButtonsOnHover',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname, '../preload/index.js')
    }
  })

  const URL = isDev
    ? 'http://localhost:5173/'
    : `file://${join(app.getAppPath(), 'dist/render/index.html')}`

  win.loadURL(URL)

  if (isDev) win.webContents.openDevTools()

  win.on('closed', () => win.destroy())

  return win
}
