import ENV from '@render/enviroment/index'

import { PropsResponse } from '@render/interface'

import { PropsPetition } from '../interface/index'

export const frontendRequest = async <T, V extends object>({
  body
}: {
  body: { query: string; variables: V }
}): Promise<PropsResponse<T>> => {
  try {
    const res = await fetch(ENV.URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })

    const data: PropsPetition<T> = await res.json()

    if (data.errors) {
      return {
        errors: { message: data.errors[0].debugMessage },
        status: false
      }
    } else {
      return { data: { res: data.data }, status: true }
    }
  } catch (error) {
    return {
      errors: { message: 'Hubo un error' },
      status: false
    }
  }
}
