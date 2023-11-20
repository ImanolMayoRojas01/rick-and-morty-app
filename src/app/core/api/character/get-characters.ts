import { getApiConnection } from "@/src/app/utils/api.utils";
import { ApiErrorController, ApiErrorResponseType, ApiResponseType } from "../../models/app/app.models";
import { CharacterPagination } from "../../models/store/character.models";

export type GetCharactersParams = {
  limit: number
  page: number
  search?: string
}

export const getCharacters = async (params: GetCharactersParams): Promise<ApiResponseType<CharacterPagination>> => {
  try {
    const response = await fetch(`http://localhost:4000/character/?limit=${params.limit}&page=${params.page}&search=${params.search}`)
    const data = await response.json()
    return data
  } catch (error) {
    const {response} = error as ApiErrorController
    return {
      success: false,
      isServerFailure: true,
      message: response.data
    }
  }
}