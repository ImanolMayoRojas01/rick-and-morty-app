export type ApiSuccessResponseType<Payload> = {
  success: boolean
  payload?: Payload
}

export type ApiErrorResponseType = {
  success: boolean
  message?: string
  code?: string
  isServerFailure?: boolean
}

export type ApiErrorController = {
  response: {
    data: string
  }
}

export type ApiResponseType<Payload> = ApiSuccessResponseType<Payload> & ApiErrorResponseType