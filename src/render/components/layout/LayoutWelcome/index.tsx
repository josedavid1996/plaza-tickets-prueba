import React, { FC, ReactNode } from 'react'

import { Heading, Text } from '@render/components/shared'

import LogoLongWhite from '@assets/image/logo-long-white.png'
import { useSessionStore } from '@render/store/session'
import { useDataStore } from '@render/store/data'
import moment from 'moment'
import { mountInitials } from '@render/utils/mountInitials'
import Time from '@render/components/shared/Time'
import useToggle from '@render/hooks/useToggle'
import ModalLogout from '@render/components/shared/Modales/ModalLogout'

interface Props {
  children: ReactNode
  title?: string | ReactNode
  reverseTitle?: boolean
  isShow?: boolean
}

export const LayoutWelcome: FC<Props> = ({
  children,
  title = 'Bienvenido',
  reverseTitle = false,
  isShow = false
}) => {
  const toggleSession = useSessionStore((state) => state.toggleSession)
  const user = useSessionStore((state) => state.user)
  const { infoData } = useDataStore((state) => state)
  const { isOpen, onToggle, onClose } = useToggle()

  return (
    <>
      <div className="fondo-layout w-full min-h-screen  flex flex-col gap-[30px] relative pb-20">
        <header className="flex justify-between mt-[5px] items-center px-[20px] z-20">
          <img
            className="w-[213px] h-[47px] cursor-pointer"
            src={LogoLongWhite}
            alt="logo"
            onClick={() => toggleSession('welcome')}
          />
          <Text
            size="base"
            color="white"
            className="cursor-pointer"
            onClick={onToggle}
          >
            {user.usuario || ''}
          </Text>
        </header>

        <div className="flex min-h-screen justify-center items-center flex-col">
          <div
            className={`flex ${
              reverseTitle ? 'flex-col-reverse' : 'flex-col'
            } ${isShow ? 'hidden' : 'block'}  gap-6 `}
          >
            <Heading
              size="6xl"
              color="white"
              className="text-center mt-[20px]"
              variant="semiBold"
            >
              {title}
            </Heading>

            <div className="min-h-[186px] max-w-[800px] mx-auto bg-white flex  rounded-xl overflow-hidden shadow-[-4px_6px_10px_rgba(0,0,0,0.60)] my-[20px]">
              <img className="min-h-full w-[256px]" src={infoData.feriaImage} />
              <div className="pr-[30px] pl-[50px] flex flex-col justify-center py-4">
                <Heading
                  color="gris"
                  size="xl"
                  variant="semiBold"
                  className="mb-[10px]"
                >
                  {infoData.eventoName}
                </Heading>
                <Text color="third" size="xxs" className="mb-[14.4px]">
                  {infoData.description}
                </Text>
                <Text size="sm" variant="semibold">
                  {moment(infoData.fecha).format('D')}{' '}
                  {mountInitials(new Date(infoData.fecha))}.
                </Text>
              </div>
            </div>
          </div>

          {children}
        </div>
        <Time />
      </div>
      <ModalLogout isOpen={isOpen} onClose={onClose} />
    </>
  )
}
