import { classNames } from '@render/utils/classNames'
import React, { HTMLAttributes } from 'react'

type Variant = 'font-normal' | 'description' | 'semibold' | 'light' | 'bold'
type Color =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'gris'
  | 'black-100'
  | 'third'
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'base'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size | number
  color?: Color | string
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  lg: 'text-[1.5rem] md:text-[1.875rem]',
  md: 'text-[1.25rem]',
  sm: 'text-[1rem]',
  xs: 'text-[14px]',
  xxs: 'text-[13px]',
  base: 'text-base'
}

const colors: Record<Color, string> = {
  white: 'text-white dark:text-black',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary',
  gris: 'text-[#4d4d4d]',
  'black-100': '#333333',
  third: 'text-[#FF5733]'
}

const variants: Record<Variant, string> = {
  light: 'font-light',
  'font-normal': 'font-normal',
  description: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

export const Text = ({
  as = 'p',
  size = 'base',
  color = 'black',
  variant = 'font-normal',
  ...props
}: Props) => {
  const isHex = color.includes('#')

  return React.createElement(as, {
    ...props,
    style: {
      color: isHex ? color : null,
      fontSize: typeof size === 'number' ? size : null
    },
    className: classNames([
      props.className,
      variants[variant],
      !isHex ? colors[color] : null,
      typeof size === 'string' ? sizes[size] : null
    ])
  })
}
