import React, { useEffect, useState } from 'react'

import { LayoutWelcome } from '@render/components/layout'
import ListTicket from '@render/components/shared/ListTicket'
import { Heading, Spinner } from '@render/components/shared'
import CardInfo from '@render/components/shared/CardInfo'
import { useSessionStore } from '@render/store/session'

import ImagePrint from '@assets/image/img-print.png'
import { useDataStore } from '@render/store/data'
import { Show } from '@render/components/shared/Show'
import { useFetch } from '@render/hooks/useFetch'
import {
  GetAllEntradasUsuarioDocumentoDocument,
  GetAllEntradasUsuarioDocumentoQuery,
  GetAllEntradasUsuarioDocumentoQueryVariables
} from '@render/generated/graphql'

const dataFalsa = [
  {
    fecha: '2022-01-07',
    feriaTitle: 'Feria de la Esperanza',
    subFeriaTitle: 'Plaza la esperanza-Lurin',
    codigo: 'T1 F1 A42',
    hora: '12:00'
  },
  {
    fecha: '2022-01-07',
    feriaTitle: 'Feria de la Esperanza',
    subFeriaTitle: 'Plaza la esperanza-Lurin',
    codigo: 'T1 F1 A43',
    hora: '12:00'
  },
  {
    fecha: '2022-01-07',
    feriaTitle: 'Feria de la Esperanza',
    subFeriaTitle: 'Plaza la esperanza-Lurin',
    codigo: 'T1 F1 A41',
    hora: '12:00'
  }
]

const PrintTicket = () => {
  const toggleSession = useSessionStore((state) => state.toggleSession)
  const { infoData } = useDataStore((state) => state)

  // Peticion para llamar las ferias
  const {
    state: { data: dataTickets, loading: loadingTickets }
  } = useFetch<
    GetAllEntradasUsuarioDocumentoQuery,
    GetAllEntradasUsuarioDocumentoQueryVariables
  >({
    body: {
      query: GetAllEntradasUsuarioDocumentoDocument,
      variables: {
        eventoId: +infoData.eventoId,
        tipoDocumento: infoData.tipoDocumento,
        numeroDocumento: infoData.numeroDocumento
      }
    }
  })

  useEffect(() => {
    let timeoutBack
    if (
      (dataTickets === undefined ||
        dataTickets.GetAllEntradasUsuarioDocumento.length === 0) &&
      loadingTickets
    ) {
      timeoutBack = setTimeout(() => {
        toggleSession('welcome')
      }, 3000)
    }

    return () => {
      clearTimeout(timeoutBack)
    }
  }, [loadingTickets])

  // console.log(dataTickets, loadingTickets)

  return (
    <LayoutWelcome
      title={
        <>
          <span className="block">Bienvenido</span>

          <span className="block pt-10">
            {infoData.nombre} {infoData.apellido}
          </span>
        </>
      }
      reverseTitle
    >
      <Show condition={loadingTickets} isDefault={<Spinner color="white" />}>
        {dataTickets === undefined ||
        dataTickets.GetAllEntradasUsuarioDocumento.length === 0 ? (
          <Heading size="2xl" color="white" className="text-center">
            No hay Ticktes
          </Heading>
        ) : (
          <div className="w-[800px] mx-auto">
            <Heading
              size="2xl"
              color="white"
              className="pt-[60px] pb-[40px] pl[20px]"
            >
              Tus tickets (
              {dataTickets.GetAllEntradasUsuarioDocumento.length < 10
                ? `0${dataTickets.GetAllEntradasUsuarioDocumento.length}`
                : dataTickets.GetAllEntradasUsuarioDocumento.length}
              )
            </Heading>

            <div className="flex flex-col gap-8">
              {dataTickets &&
                dataTickets.GetAllEntradasUsuarioDocumento.map(
                  (item, index) => (
                    <ListTicket
                      key={index}
                      fecha={item.fecha}
                      codigo={item.codigo}
                      hora={item.hora}
                      asiento={item.asiento}
                      feria={infoData.feria}
                      evento={infoData.eventoName}
                    />
                  )
                )}
            </div>
            <div className="flex justify-center mt-10">
              <CardInfo
                img={ImagePrint}
                title={
                  <span>
                    Imprime tus <br />
                    tickets
                  </span>
                }
                onClick={() => toggleSession('process-end')}
              />
            </div>
          </div>
        )}
      </Show>
    </LayoutWelcome>
  )
}

export default PrintTicket
