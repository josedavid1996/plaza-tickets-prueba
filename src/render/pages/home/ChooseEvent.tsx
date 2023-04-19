import React, { useEffect, useState } from 'react'

import { print } from 'graphql/language/printer'

import {
  Button,
  Heading,
  Loading,
  Option,
  Select
} from '@render/components/shared'
import { useForm } from '@render/hooks'
import { useSessionStore } from '@render/store/session'

import ImgLogo from '@assets/image/logo-login.png'
import CardFeria from '@render/components/shared/CardFeria'
import { useDataStore } from '@render/store/data'
import { useFetch } from '@render/hooks/useFetch'
import {
  GetAllEventosDocument,
  GetAllEventosQuery,
  GetAllEventosQueryVariables,
  GetAllFeriasDocument,
  GetAllFeriasQuery,
  GetAllFeriasQueryVariables
} from '@render/generated/graphql'
import { Show } from '@render/components/shared/Show'
import { frontendRequest } from '@render/api'
import { Toast } from '@render/utils/Toast'

const ChooseEvent = () => {
  const toggleSession = useSessionStore((state) => state.toggleSession)
  const updateInfoData = useDataStore((state) => state.updateInfoData)
  const [isEventoSlug, setIsEventoSlug] = useState('')
  const { values, ...form } = useForm({
    initialValues: {
      eventoId: ''
    }
  })
  // Estado para cambiar de vistas
  const [isShow, setIsShow] = useState(true)

  // Estado para los datos de los eventos
  const [dataEventos, setDataEventos] = useState([])

  const handleSubmit = () => {
    toggleSession('welcome')
  }

  // Se actualiza el select de eventos
  useEffect(() => {
    if (dataEventos.length !== 0) {
      form.setField('eventoId', dataEventos[0].eventoId)
    }
  }, [dataEventos.length])

  // Peticion para llamar las ferias
  const {
    state: { data: dataFerias, loading: loadingFeria, error: errorFeria }
  } = useFetch<GetAllFeriasQuery, GetAllFeriasQueryVariables>({
    body: { query: GetAllFeriasDocument, variables: {} }
  })

  // Funcion para cambiar de vista y llamar los eventos
  const handleClick = async (feriaSlug: string) => {
    const response = await frontendRequest<
      GetAllEventosQuery,
      GetAllEventosQueryVariables
    >({
      body: {
        query: print(GetAllEventosDocument),
        variables: {
          feriaSlug,
          estado: null
        }
      }
    })

    if (response.status) {
      setDataEventos(response.data.res.GetAllEventos.data)
      setIsShow(false)
    } else {
      Toast({ type: 'error', message: response.errors.message })
    }
  }

  return (
    <>
      <div className="relative  min-h-screen  flex flex-col items-center gap-[50px] justify-center ">
        <div>
          {isShow ? (
            <Show condition={loadingFeria} isDefault={<Loading />}>
              <img className="w-[192px] h-[192px] mx-auto" src={ImgLogo} />

              {typeof errorFeria === 'string' ? (
                <Heading
                  variant="semiBold"
                  color="white"
                  size="3.5xl"
                  className="text-center mb-5"
                >
                  No se pudo cargar la información
                </Heading>
              ) : (
                <div className="flex flex-wrap gap-4 justify-between mt-6 px-6">
                  {dataFerias &&
                    dataFerias.GetAllFerias.data.map((feria) => (
                      <CardFeria
                        key={feria.feriaId}
                        img={feria?.imagenPrincipal?.url!}
                        title={feria?.titulo!}
                        onClick={() => {
                          handleClick(feria.slug!)
                          updateInfoData({
                            feria: feria.titulo,
                            feriaImage: feria.imagenPrincipal.url
                          })
                        }}
                      />
                    ))}
                </div>
              )}
            </Show>
          ) : (
            <div>
              <Heading
                variant="semiBold"
                color="white"
                size="3.5xl"
                className="text-center mb-5"
              >
                Elige el evento
              </Heading>

              <form
                onSubmit={form.onSubmit(handleSubmit)}
                className="flex flex-col  max-w-[320px]"
              >
                {dataEventos.length === 0 ? (
                  <Heading size="xl">No hay Eventos</Heading>
                ) : (
                  <Select
                    {...form.inputProps('eventoId')}
                    onChange={(e) => console.log(e.target)}
                  >
                    {dataEventos.map((item) => (
                      <Option value={item.eventoId} key={item.eventoId}>
                        {item.titulo}
                      </Option>
                    ))}
                  </Select>
                )}
                <Button
                  color="secondary"
                  type="submit"
                  className="w-full mt-4"
                  onClick={() => {
                    const eventoName = dataEventos.filter(
                      (item) => item.eventoId === values.eventoId
                    )
                    updateInfoData({
                      eventoId: values.eventoId,
                      eventoName: eventoName[0].titulo,
                      description: eventoName[0].descripcionCorta,
                      fecha: eventoName[0].fecha
                    })
                  }}
                >
                  Ingresar
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ChooseEvent
