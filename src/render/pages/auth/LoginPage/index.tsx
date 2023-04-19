import React, { useRef, useState } from 'react'

import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import layout from 'simple-keyboard-layouts/build/layouts/spanish'

import { print } from 'graphql/language/printer'

import ImgLogo from '@assets/image/logo-login.png'

import { Button, Input } from '@render/components/shared'

import { FormError, useForm } from '@render/hooks'
import { useSessionStore } from '@render/store/session'
import { isEmpty } from '@render/utils/isEmpty'
import { ErrorMessages } from '@render/utils/messages'
import { Toast } from '@render/utils/Toast'
import { frontendRequest } from '@render/api'
import {
  LoginTotenDocument,
  LoginTotenMutation,
  LoginTotenMutationVariables
} from '@render/generated/graphql'

const LoginPage = () => {
  const [stateLayoutName, setStateLayoutName] = useState('default')
  // Estado de las vistas
  const toggleSession = useSessionStore((state) => state.toggleSession)
  const updateUsuario = useSessionStore((state) => state.updateUsuario)

  // Estado para monitorizar la carga de la peticion
  const [isLoading, setIsLoading] = useState(false)

  // Estado para saber en que input esta el usuario
  const [inputName, setInputName] = useState<string>()

  //Hook del formolario
  const { values, ...form } = useForm({
    initialValues: {
      user: '',
      password: ''
    },
    validate: (values) => {
      const errors: FormError<typeof values> = {}

      if (isEmpty(values.user)) errors.user = ErrorMessages.empty
      if (isEmpty(values.password)) errors.password = ErrorMessages.empty

      return errors
    }
  })

  //useRef para el teclado
  const keyboard = useRef(null)

  // Funcion para actualizar el input que el usuario este utlizando
  const onChangeAll = (inputs) => {
    form.setField(inputName as 'user' | 'password', inputs[inputName])
  }

  // Funcion para actualizar el estado del teclado
  const onChangeInput = (event) => {
    const inputVal = event.target.value

    form.setFields({
      ...values,
      [inputName]: inputVal
    })

    keyboard.current.setInput(inputVal)
  }

  const handleShift = () => {
    const layoutName = stateLayoutName

    setStateLayoutName(layoutName === 'default' ? 'shift' : 'default')
  }

  const onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift()
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const response = await frontendRequest<
      LoginTotenMutation,
      LoginTotenMutationVariables
    >({
      body: {
        query: print(LoginTotenDocument),
        variables: {
          input: {
            password: values.password,
            usuario: values.user.toLocaleUpperCase()
          }
        }
      }
    })

    if (response.status) {
      window.api.saveDateUser(response.data.res.LoginToten)
      Toast({ type: 'success', message: 'Bienvenido' })
      setIsLoading(false)
      toggleSession('choose-event')
      updateUsuario(response.data.res.LoginToten)
    } else {
      setIsLoading(false)
      Toast({ type: 'error', message: response.errors.message })
    }
    setIsLoading(false)
  }

  return (
    <div className="relative  min-h-screen  flex flex-col items-center gap-[50px] justify-center ">
      <div>
        <img className="w-[228px] h-[228px]" src={ImgLogo} />

        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-6 max-w-[280px]"
        >
          <Input
            {...form.inputProps('user')}
            value={values.user.toUpperCase()}
            placeholder="Usuario"
            onChange={onChangeInput}
            onFocus={() => setInputName('user')}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            {...form.inputProps('password')}
            onChange={onChangeInput}
            onFocus={() => setInputName('password')}
          />

          <div>
            <Button isLoading={isLoading} type="submit" className="w-full">
              Ingresar
            </Button>
          </div>
        </form>
      </div>
      <div className="w-[80%] mx-auto">
        <Keyboard
          display={{
            '{bksp}': '<——',
            '{enter}': 'enter',
            '{tab}': 'tab',
            '{shift}': 'shift',
            '{space}': ' ',
            '{lock}': 'bloq mayús'
          }}
          layoutName={stateLayoutName}
          keyboardRef={(r) => (keyboard.current = r)}
          inputName={inputName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          {...layout}
        />
      </div>
      <span className="text-white absolute bottom-0 right-2 text-[12px]">
        version 0.0.3
      </span>
    </div>
  )
}

export default LoginPage
