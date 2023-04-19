import moment from 'moment'
import React from 'react'
import { Text } from '../Text'

interface Props {
  fecha: string
  codigo: string
  hora: string
  asiento: string
  feria: string
  evento: string
}

const ListTicket = ({ fecha, codigo, hora, feria, asiento, evento }: Props) => {
  const fechaNew = new Date(fecha)
  var nombreMes = fechaNew.toLocaleString('es', { month: 'short' })
  return (
    <>
      <div className="flex justify-between bg-[#F8F6F6] py-3 pl-5 pr-6 rounded-[8px] items-center shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center justify-center">
          <p className="capitalize text-[14px] font-semibold text-[#6c6a6a] leading-[14px]">
            {nombreMes}.
          </p>
          <p className="text-[24px] font-semibold text-[#6c6a6a] leading-[26px]">
            {moment(fecha).format('DD')}
          </p>
        </div>
        <div>
          <div className="flex">
            <p className="capitalize text-[14px] font-medium  text-[#6c6a6a] leading-[14px]">
              {nombreMes} - {hora}
            </p>
          </div>
          <Text color="gris" size="base" variant="semibold">
            {feria}
          </Text>
          <Text color="gris" size="xxs" variant="description">
            {evento}
          </Text>
        </div>
        <div>
          <Text color="gris" size="xs" variant="description">
            {codigo.replace('-', ' ')} {asiento}
          </Text>
        </div>
      </div>
    </>
  )
}

export default ListTicket
