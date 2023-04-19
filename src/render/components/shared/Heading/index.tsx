import { classNames } from '@render/utils/classNames'
import React, { HTMLAttributes } from 'react'

type Variant = 'title' | 'regular' | 'medium' | 'semiBold'
type Color = 'primary' | 'secondary' | 'black' | 'white' | 'error' | 'gris'
export type Size = '3.5xl' | '6xl' | 'xl' | '2xl'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: 'title' | 'regular' | 'medium' | 'semiBold'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<Size, string> = {
  '3.5xl': 'text-[32px]',
  '6xl': 'text-6xl',
  '2xl': 'text-2xl',
  xl: 'text-xl'
}

const colors: Record<Color, string> = {
  white: 'text-white',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary',
  error: 'text-red-500',
  gris: 'text-[#4d4d4d]'
}

const variants: Record<Variant, string> = {
  title: 'font-bold',
  medium: 'font-medium',
  semiBold: 'font-semibold',
  regular: 'font-normal'
}

export const Heading = ({
  as = 'h2',
  size = '3.5xl',
  color = 'black',
  variant = 'title',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([
      props.className,
      sizes[size],
      colors[color],
      variants[variant]
    ])
  })
}
