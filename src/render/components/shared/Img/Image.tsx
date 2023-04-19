import { classNames } from '@utils/classNames'
import { ImgHTMLAttributes, useState } from 'react'
import { Spinner } from '../Spinner'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

const Image = ({ src, alt, className, ...props }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <img
        className={classNames([loading ? 'hidden' : '', className])}
        src={src}
        alt={alt}
        onLoad={() => {
          setLoading(false)
        }}
        {...props}
      />

      {loading && <Spinner />}
    </>
  )
}

export default Image
