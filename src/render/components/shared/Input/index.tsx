import React, { useId } from 'react'
import {
  useState,
  SVGProps,
  forwardRef,
  ReactElement,
  ForwardedRef,
  InputHTMLAttributes
} from 'react'

import { Icon as IconReact } from '@components/shared/Icon'

import { isEmpty } from '@render/utils/isEmpty'
import { classNames } from '@render/utils/classNames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const Input = (
  { label, icon: Icon, rightElement, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement> | null
) => {
  const uid = useId()
  const [show, setShow] = useState(false)

  const hasError = props.error && !isEmpty(props.error)

  return (
    <div>
      <div className="relative h-[40px] rounded shadow w-full ">
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            hasError ? 'text-red-600' : 'text-white ',
            ' transition-all font-medium'
          ])}
        >
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          id={`input-${uid}`}
          autoComplete="off"
          type={
            props.type === 'password'
              ? show
                ? 'text'
                : 'password'
              : props.type
          }
          className={classNames([
            hasError
              ? 'border-red-400 focus:border-red-600'
              : 'border-transparent focus:border-secondary-100 ',
            'outline-none w-full px-[16px] py-[8px] border rounded-[3px] transition-colors h-full text-[15px] border-[#818a91] text-primary no-virtual-keyboard'
          ])}
        />

        {props.type === 'password' && (
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-1 top-[3px]"
          >
            {show ? <IconReact name="eye" /> : <IconReact name="eye-slash" />}
          </button>
        )}

        {typeof Icon === 'function' && (
          <button className="btn-icon btn-ghost-primary absolute right-3 top-[13px]">
            {<Icon />}
          </button>
        )}

        {rightElement && (
          <div className="absolute right-3 top-[13px]">{rightElement}</div>
        )}

        <p className="text-sm text-red-900">{hasError ? props.error : ''}</p>
      </div>
    </div>
  )
}

export default forwardRef(Input)
