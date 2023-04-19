import { GraphQLError } from 'graphql'

// export type ApolloQueryResult<T> = {
//   data?: T
//   errors?: GraphQLError[]
// }

export interface PropsPetition<T> extends Response {
  data?: T
  errors?: GraphQLError
}

export interface PropsResponse<T> {
  data?: {
    res: T
  }
  errors?: {
    message: string
  }
  status: boolean
}
