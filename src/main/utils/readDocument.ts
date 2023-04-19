import { app } from 'electron'
const fs = require('fs')
import path from 'node:path'
import { join } from 'path'

export const readDocument = () => {
  try {
    const data = fs
      .readFileSync(
        !app.isPackaged
          ? path.join(app.getAppPath(), '../../src/main/data/data.json')
          : path.join(app.getAppPath(), '../data/data.json')
      )
      .toString('utf8')

    if (JSON.parse(data) === 'logout') {
      return { status: false, data: '{}' }
    } else {
      return { status: true, data }
    }
  } catch (error) {
    console.log('FILE_NOT_EXIST: ', error)
    return { status: false, data: '{}' }
  }
}
