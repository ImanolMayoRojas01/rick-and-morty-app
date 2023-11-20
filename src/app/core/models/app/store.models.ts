export type FetchStateType = 'initialize' | 'loading' | 'success' | 'error'
export type FetchStateCompleteType = {
  statusFetch: FetchStateType,
  code: string
  isServerFailure: boolean
}