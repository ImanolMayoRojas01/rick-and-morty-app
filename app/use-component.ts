import { useAppDispatch, useAppSelector } from '@/src/app/store'
import { A_GET_CHARACTERS } from '@/src/app/store/character/actions'
import { useEffect, useState, useRef } from 'react'
import { debounce } from 'debounce'

const LIMIT_DOCS = 20

export const useComponent = () => {

  const dispatch = useAppDispatch()
  const CharacterStore = useAppSelector(store => store.character)
  
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState<undefined | string>(undefined)

  const searchRef = useRef<HTMLInputElement>(null)

  const changeCurrentPage = (value: number) => setCurrentPage(value)
  const changeSearchText = () => setSearchText(searchRef.current?.value)

  // const onChangeDebounce = debounce(() => {
    
  // }, 1000);

  const getCharacter = () => {
    dispatch(A_GET_CHARACTERS({
      limit: LIMIT_DOCS,
      page: currentPage,

    }))
  }
  useEffect(() => { console.log(searchText) }, [searchText])
  useEffect(getCharacter, [currentPage, searchText])

  return {
    properties: {
      CharacterStore,
      searchRef
    },
    methods: {
      changeCurrentPage,
      changeSearchText
    }
  }
}