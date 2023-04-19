import { HTMLAttributes } from 'react'

import Image from '../Img/Image'

interface Props extends HTMLAttributes<HTMLDivElement> {
  img: string
  title: string
}

const CardFeria = ({ img, title, ...props }: Props) => {
  return (
    <>
      <div {...props} className="w-[230px] overflow-hidden cursor-pointer">
        <Image src={img || ''} className="w-[256px] h-[144px] rounded-[8px]" />
        <p className="text-center mt-1 text-white">{title}</p>
      </div>
    </>
  )
}

export default CardFeria
