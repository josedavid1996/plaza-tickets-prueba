import React, { useRef, useState } from 'react'

import { print } from 'graphql/language/printer'

import { LayoutWelcome } from '@render/components/layout'
import { Heading, Option, Select } from '@render/components/shared'

import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { useForm } from '@render/hooks'
import { useSessionStore } from '@render/store/session'
import { useDataStore } from '@render/store/data'
import { Toast } from '@render/utils/Toast'
import { frontendRequest } from '@render/api'
import {
  BuscarPersonaDocument,
  BuscarPersonaMutation,
  BuscarPersonaMutationVariables
} from '@render/generated/graphql'

const Manual = () => {
  const keyboard = useRef(null)
  const toggleSession = useSessionStore((state) => state.toggleSession)
  const updateInfoData = useDataStore((state) => state.updateInfoData)

  const { values, ...form } = useForm({
    initialValues: {
      number: '',
      tipoDocumento: 'DNI'
    }
  })

  const [layoutName, setLayoutName] = useState('default')

  const onChange = (input) => {
    form.setField('number', input)
  }

  const onKeyPress = async (button) => {
    if (button === '{enter}') {
      if (values.number.length === 0) {
        Toast({
          type: 'error',
          message: 'Debes escribir tu numero de documento'
        })
        return
      }
      const response = await frontendRequest<
        BuscarPersonaMutation,
        BuscarPersonaMutationVariables
      >({
        body: {
          query: print(BuscarPersonaDocument),
          variables: {
            input: {
              tipoDocumento: values.tipoDocumento,
              numeroDocumento: values.number
            }
          }
        }
      })
      if (response.status) {
        // updateUser(values.tipoDocumento, values.number)
        console.log(response)
        updateInfoData({
          tipoDocumento: values.tipoDocumento,
          numeroDocumento: values.number,
          nombre: response.data.res.BuscarPersona.nombres,
          apellido: response.data.res.BuscarPersona.apellidos
        })
        toggleSession('print-ticket')
      } else {
        Toast({
          type: 'error',
          message: response.errors.message
        })
      }
    }
  }

  return (
    <LayoutWelcome>
      <Heading
        variant="semiBold"
        color="white"
        size="3.5xl"
        className="text-center my-5"
      >
        Ingresa tu DNI con el numeral
      </Heading>
      <div className="flex flex-col gap-5">
        <div className="w-[243px] mx-auto">
          <Select {...form.inputProps('tipoDocumento')}>
            <Option value="DNI">DNI</Option>
            <Option value="CE">CE</Option>
          </Select>
        </div>

        <input
          className="py-[20px] px-[50px] rounded-[5px] w-[243px] mx-auto text-[30px] font-medium outline-none"
          {...form.inputProps('number')}
        />
        <div className="w-[252px] mx-auto">
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layoutName}
            display={{ '{bksp}': 'Borrar', '{enter}': '✔' }}
            layout={{
              default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}']
            }}
            theme={'hg-theme-default hg-layout-numeric numeric-theme'}
            onChange={(input) => onChange(input)}
            onKeyPress={(button) => onKeyPress(button)}
          />
        </div>
      </div>
    </LayoutWelcome>
  )
}

export default Manual
