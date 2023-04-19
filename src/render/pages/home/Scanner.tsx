import React from 'react'

import { LayoutWelcome } from '@render/components/layout'

import ScanDni from '@assets/image/scan-dni.png'
import { useSessionStore } from '@render/store/session'

const Scanner = () => {
  const toggleSession = useSessionStore((state) => state.toggleSession)

  return (
    <LayoutWelcome>
      <div className="m-5 w-[360px] bg-white mx-auto ">
        <h2 className="text-center text-[32px] text-[#4d4d4d] font-semibold mb-2 leading-[1] pt-5 pb-6 border border-b-primary ">
          Coloca tu DNI <br /> en el lector.
        </h2>
        <img
          src={ScanDni}
          alt="scn"
          onClick={() => toggleSession('print-ticket')}
        />
      </div>
    </LayoutWelcome>
  )
}

export default Scanner
