import { classNames } from '@render/utils/classNames'
import { isEmpty } from '@render/utils/isEmpty'
import { OptionHTMLAttributes, SelectHTMLAttributes, useId } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  withErrors?: boolean
}

export const Option = ({
  children,
  ...props
}: OptionHTMLAttributes<HTMLOptionElement>) => (
  <option {...props} className=" ">
    {children}
  </option>
)

export const Select = ({
  children,
  label,
  className,
  withErrors = true,
  ...props
}: Props) => {
  const uid = useId()
  const hasError = props.error && !isEmpty(props.error)

  return (
    <div className={className}>
      <div className="relative bg-white border border-[#818a91]   h-[40px] rounded-[3px] shadow w-full text-primary">
        <select
          {...props}
          id={`input-${uid}`}
          className={classNames([
            hasError
              ? 'border-red-400 focus:border-red-600'
              : 'border-transparent ',
            'peer bg-transparent outline-none w-full h-full pt-[5px] pr-[20px] pl-[14px] border-2 rounded transition-colors '
          ])}
        >
          {children}
        </select>

        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            'top-1 left-2 text-primary-500  text-opacity-80',
            hasError ? 'text-red-600' : 'peer-focus:text-secondary-500 ',
            'absolute peer-focus:top-1 peer-focus:left-2 transition-all'
          ])}
        >
          {label}
        </label>
      </div>
      {!withErrors && (
        <p className="text-sm text-red-700  h-5 ">
          {hasError ? props.error : ''}
        </p>
      )}
    </div>
  )
}
