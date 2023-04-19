import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

import { ButtonVariant, variants } from './variants'
import { classNames } from '@render/utils/classNames'
import { Spinner } from '@render/components/shared'

type Ref = ForwardedRef<HTMLButtonElement> | null
type Color = 'primary' | 'secondary' | 'white' | 'error'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  isIcon?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
}

const btnIcon =
  'border-[1.5px] w-[35px] h-[35px] outline-none rounded grid place-items-center cursor-pointer'
const btn =
  'flex items-center justify-center gap-3 border-[1.5px] py-2 px-4 md:px-8 font-medium outline-none rounded cursor-pointer'

const Button = (
  { isIcon, isLoading, color = 'primary', variant = 'solid', ...props }: Props,
  ref: Ref
) => {
  return (
    <button
      {...props}
      ref={ref}
      disabled={props.disabled || isLoading}
      className={classNames([
        'duration-200 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed',
        variants[variant][color],
        props.className,
        isIcon ? btnIcon : btn
      ])}
    >
      <>
        {!isIcon && !isLoading && props.children}
        {isIcon && !isLoading && props.children}
        {isLoading && <Spinner color={color} />}
      </>
    </button>
  )
}

export default forwardRef(Button)
