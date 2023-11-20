import { createReducer } from "@reduxjs/toolkit";
import { CharacterStateType } from "../../core/models/store/character.models";
import { A_CHARACTER_RESET_FETCH_STATES, A_GET_CHARACTERS } from "./actions";

const initialState: CharacterStateType = {
  characterPagination: {
    currentPage: 0,
    totalPages: 0,
    countPages: 0,
    characters: []
  },
  fetchStates: {
    getCharacters: 'initialize'
  }
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(A_CHARACTER_RESET_FETCH_STATES, state => {
      state.fetchStates = initialState.fetchStates
    })
    // GET CHARACTERS
    .addCase(A_GET_CHARACTERS.pending, (state) => {
      state.fetchStates.getCharacters = 'loading'
    })
    .addCase(A_GET_CHARACTERS.fulfilled, (state, { payload }) => {
      const data = payload.payload
      if (!payload.success || !data) {
        state.fetchStates.getCharacters = 'error'
        return
      }
      state.fetchStates.getCharacters = 'success'
      state.characterPagination = data
    })
})

export default reducer