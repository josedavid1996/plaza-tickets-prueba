import React, { HTMLAttributes, ReactNode } from 'react'

interface Props {
  img: string
  title: ReactNode
  onClick: () => void
}

const CardInfo = ({ img, title, onClick }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-[360px]  h-[292px] fondo-card m-5 rounded-[10px] flex flex-col items-center justify-center cursor-pointer"
      >
        <h2 className="text-center text-[32px] text-[#4d4d4d] font-semibold mb-2 leading-[1]">
          {title}
        </h2>

        <img src={img} alt={img} className="w-[108px] h-[108px]" />
      </div>
    </>
  )
}

export default CardInfo
