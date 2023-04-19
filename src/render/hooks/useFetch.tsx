/* eslint-disable */
import { frontendRequest } from '@render/api'

import { useEffect, useReducer } from 'react'
import { print } from 'graphql/language/printer'
import { DocumentNode } from 'graphql'

interface State<T> {
  data: T | undefined
  loading: boolean
  error: Error | null | string
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'LoadingFalse' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: string }

export function useFetch<T, V extends object>({
  body
}: {
  body?: { query: DocumentNode; variables: V }
}): {
  state: State<T>
} {
  // Valores iniciales
  const initialState: State<T> = {
    data: undefined,
    loading: false,
    error: null
  }
  // useReducer para gestionar las acciones
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true }
      case 'fetched':
        return { ...initialState, data: action.payload, loading: true }
      case 'error':
        return { ...initialState, error: action.payload, loading: true }
      case 'LoadingFalse':
        return {
          ...initialState,
          loading: false
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const resultaData = async () => {
      const response = await frontendRequest<T, V>({
        body: {
          query: print(body.query),
          variables: body.variables
        }
      })
      if (response.status) {
        dispatch({ type: 'fetched', payload: response.data.res })
      } else {
        dispatch({ type: 'error', payload: response.errors.message })
      }
    }

    resultaData()
  }, [])

  return { state }
}
