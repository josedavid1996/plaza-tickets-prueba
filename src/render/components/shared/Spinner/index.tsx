import { classNames } from '@render/utils/classNames'

type Color = 'primary' | 'secondary' | 'white' | 'error'

interface Props {
  color?: Color
}

const colors: Record<Color, string> = {
  white: 'border-t-white border-l-white',
  primary:
    'border-t-primary-300 dark:border-t-primary-500 border-l-primary-300 dark:border-l-primary-500',
  error:
    'border-t-red-300 dark:border-t-red-500 border-l-red-300 dark:border-l-red-500',
  secondary:
    'border-t-secondary-300 dark:border-t-secondary-500 border-l-secondary-300 dark:border-l-secondary-500'
}

export const Spinner = ({ color = 'primary' }: Props) => {
  return (
    <div
      className={classNames([
        colors[color],
        'h-[21px] w-[21px] rounded-[50%] border-[5px] border-r-transparent border-b-transparent animate-spin mx-auto'
      ])}
    />
  )
}
