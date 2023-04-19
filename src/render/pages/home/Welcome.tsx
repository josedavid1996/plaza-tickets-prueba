import React from 'react'

import { LayoutWelcome } from '@render/components/layout'

import ImgScaneer from '@assets/image/img-scaneer.png'
import ImgManual from '@assets/image/img-manual.png'
import { useSessionStore } from '@render/store/session'
import CardInfo from '@render/components/shared/CardInfo'

const Welcome = () => {
  const toggleSession = useSessionStore((state) => state.toggleSession)

  return (
    <LayoutWelcome>
      <div className="flex justify-center">
        <CardInfo
          img={ImgScaneer}
          title={
            <span>
              Escanea tu <br /> DNI
            </span>
          }
          onClick={() => toggleSession('scanner')}
        />
        <CardInfo
          img={ImgManual}
          title={
            <span>
              Ingresar <br /> Manualmente
            </span>
          }
          onClick={() => toggleSession('manual')}
        />
      </div>
    </LayoutWelcome>
  )
}

export default Welcome
