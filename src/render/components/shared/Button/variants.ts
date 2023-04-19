import './button.css'
export type ButtonVariant = 'solid' | 'outline' | 'ghost'

interface ButtonColors {
  white: string
  primary: string
  secondary: string
  error: string
}

export const variants: Record<ButtonVariant, ButtonColors> = {
  solid: {
    primary:
      'text-white border-transparent bg-primary hover:bg-primary-600 text-[15px]',
    error: 'text-white border-transparent bg-red-500 hover:bg-red-600',
    secondary:
      'text-white border-transparent bg-secondary hover:bg-secondary-500',
    white: 'text-secondary border-transparent bg-white hover:bg-gray-200'
  },
  outline: {
    primary:
      'bg-transparent text-primary border-primary  hover:bg-primary hover:text-white',
    error:
      'bg-transparent text-primary border-red-500  hover:bg-red-500 hover:text-white',
    white:
      'bg-transparent  text-white border-white hover:bg-white hover:text-secondary  hover:border-secondary',
    secondary:
      'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white  dark:text-secondary-500 dark:border-secondary-500 hover:dark:text-white hover:dark:bg-secondary-500;'
  },
  ghost: {
    primary:
      'bg-transparent border-transparent text-primary hover:text-white hover:bg-primary',
    error:
      'bg-transparent border-transparent text-white hover:text-white hover:bg-red-500',
    secondary:
      'bg-transparent border-transparent text-secondary hover:text-white hover:bg-secondary',
    white:
      'bg-transparent border-transparent text-white hover:text-secondary-500 hover:bg-white'
  }
}
