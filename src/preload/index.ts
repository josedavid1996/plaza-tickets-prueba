import { IPC_EVENTS } from '@common/types'
import { Toten } from '@render/generated/graphql'
import { contextBridge, ipcRenderer } from 'electron'

export type API = {
  close: () => void
  minimize: () => void
  saveDateUser: (data: Toten | string) => void
  readDocument: () => Promise<{ status: boolean; data: string }>
}
window.onkeydown = (evt: KeyboardEvent) => {
  // console.log(evt.code)
  if (
    (evt.code == 'Minus' ||
      evt.code == 'Equal' ||
      evt.code === 'Slash' ||
      evt.code === 'Digit0' ||
      evt.code === 'Numpad0' ||
      evt.code === 'NumpadAdd' ||
      evt.code === 'NumpadSubtract') &&
    (evt.ctrlKey || evt.metaKey)
  ) {
    evt.preventDefault()
  }
}

const api: API = {
  close: () => ipcRenderer.send(IPC_EVENTS.window_close),
  minimize: () => ipcRenderer.send(IPC_EVENTS.window_minimize),
  saveDateUser: (data) => ipcRenderer.send(IPC_EVENTS.save_date_user, data),
  readDocument: () => ipcRenderer.invoke(IPC_EVENTS.read_docuement)
}

contextBridge.exposeInMainWorld('api', api)
