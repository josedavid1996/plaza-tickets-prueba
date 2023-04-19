import { create } from 'zustand'

type StateInfoData =
  | { feria: string; feriaImage: string }
  | { eventoId: string; eventoName: string; description: string; fecha: string }
  | {
      tipoDocumento?: string
      numeroDocumento?: string
      nombre?: string
      apellido?: string
    }

interface DataStore {
  infoData: {
    eventoId?: string
    eventoName?: string
    tipoDocumento?: string
    numeroDocumento?: string
    feria?: string
    nombre?: string
    apellido?: string
    feriaImage?: string
    description?: string
    fecha?: string
  }
  updateInfoData: (value: StateInfoData) => void
}

export const useDataStore = create<DataStore>()((set) => ({
  infoData: {},
  updateInfoData: (value) =>
    set((state) => ({ infoData: { ...state.infoData, ...value } }))
}))
