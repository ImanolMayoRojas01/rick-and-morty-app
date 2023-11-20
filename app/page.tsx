"use client"

import styles from './styles.module.scss'
import { Table, TableHead, TableRow, TableBody, TableCell, Pagination } from "@mui/material"
import { useComponent } from "./use-component"
import InputSearch from '@/src/app/components/InputSearch'

export default function Home() {
  const { properties, methods } = useComponent()

  const {
    CharacterStore,
    searchRef
  } = properties

  const {
    changeCurrentPage,
    changeSearchText
  } = methods

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        {/* <InputSearch
          time={2000}
          ref={searchRef}
          onChange={changeSearchText}
        /> */}
      </div>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Especie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            CharacterStore.characterPagination.characters.map((character, index) => (
              <TableRow key={index}>
                <TableCell>{character.id}</TableCell>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.species}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <div className={styles.pagination}>
        <Pagination
          count={CharacterStore.characterPagination.countPages}
          color="primary"
          onChange={(_, page) => changeCurrentPage(page)}
        />
      </div>
      
    </div>
  )
}
