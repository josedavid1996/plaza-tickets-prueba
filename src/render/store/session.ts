import { Toten } from '@render/generated/graphql'
import { create } from 'zustand'

interface SessionStore {
  status: string
  user: Toten
  toggleSession: (value: string) => void
  isAuthentication: () => void
  logoutAction: () => void
  updateUsuario: (value: Toten) => void
}

export const useSessionStore = create<SessionStore>()((set) => ({
  status: 'login',
  user: {},
  toggleSession: (value: string) => set(() => ({ status: value })),
  updateUsuario: (value: Toten) => set(() => ({ user: value })),
  isAuthentication: async () => {
    const res = await window.api.readDocument()
    console.log(res)
    if (!res.status) {
      set({ status: 'login' })
    } else {
      set({ status: 'choose-event' })
      set({ user: JSON.parse(res.data) })
    }
  },
  logoutAction: () => {
    const token = localStorage.reomveItem('token')
    set({ status: 'login' })
  }
}))
