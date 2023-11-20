import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponseType } from "../../core/models/app/app.models";
import { CharacterPagination } from "../../core/models/store/character.models";
import { GetCharactersParams, getCharacters } from "../../core/api/character/get-characters";

export const A_CHARACTER_RESET_FETCH_STATES = createAction("character/reset-fetch-state")

export const A_GET_CHARACTERS = createAsyncThunk<ApiResponseType<CharacterPagination>, GetCharactersParams>(
  "character/list",
  async (params) => await getCharacters(params)
)