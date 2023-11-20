import { FetchStateType } from "../app/store.models"

export type CharacterOriginType = 'unknown' | ''
export type CharacterStatusType = 'Alive' | ''
export type CharacterSpecieType = 'Human' | ''
export type CharacterGenderType = 'Male' | 'Female'

export type CharacterLocation = {
  name: string,
  url: string
}

export type CharacterOrigin = {
  name:CharacterOriginType,
  url: string
}

export type CharacterInfo = {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export type CharacterPagination = {
  countPages: number
  totalPages: number
  currentPage: number
  characters: CharacterEntity[]
}

export type CharacterEntity = {
  id: number,
  name: string,
  status: CharacterStatusType,
  species: CharacterSpecieType,
  type: string,
  gender: CharacterGenderType,
  origin:CharacterOrigin,
  location:CharacterLocation,
  image: string,
  episode: string[],
  url: string,
  created: string | Date
}

export type CharacterFetchStateType = {
  getCharacters: FetchStateType
}

export type CharacterStateType = {
  characterPagination: CharacterPagination
  fetchStates: CharacterFetchStateType
}