import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  isDefault?: any
  condition: boolean
}

export const Show = ({ children, condition, isDefault }: IProps) =>
  condition ? children : isDefault || null
