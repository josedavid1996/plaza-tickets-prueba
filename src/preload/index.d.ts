import { API } from '.'

declare global {
  interface Window {
    api: API
  }
  interface Navigator {
    virtualKeyboard?: {
      hide(): void
      show(): void
      isEnabled(): boolean
    }
  }
}
