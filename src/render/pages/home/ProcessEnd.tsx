import React, { useEffect } from 'react'

import { LayoutWelcome } from '@render/components/layout'
import { Heading, Text } from '@render/components/shared'
import { useSessionStore } from '@render/store/session'

const ProcessEnd = () => {
  const toggleSession = useSessionStore((state) => state.toggleSession)

  useEffect(() => {
    const timeoutBack = setTimeout(() => {
      toggleSession('welcome')
    }, 5000)

    return () => {
      clearTimeout(timeoutBack)
    }
  }, [])

  return (
    <>
      <LayoutWelcome isShow>
        <div className="absolute top-0 bottom-0 flex flex-col items-center left-0 right-0 mx-auto justify-center">
          <Heading variant="semiBold" size="3.5xl" color="white">
            Disfruta de tu evento
          </Heading>

          <Text color="white" size="lg" className="mt-4">
            00
          </Text>
          <Text
            color="white"
            size="base"
            className="cursor-pointer"
            onClick={() => toggleSession('welcome')}
          >
            Regresar al inicio
          </Text>
        </div>
      </LayoutWelcome>
    </>
  )
}

export default ProcessEnd
