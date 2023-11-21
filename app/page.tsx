"use client"

import styles from './styles.module.scss'
import { Pagination, Card, CardActionArea, CardMedia, CardContent, Typography, Skeleton } from "@mui/material"
import { useComponent } from "./use-component"
import InputSearch from '@/src/app/components/InputSearch'
import Tag from '@/src/app/components/Tag'

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
        <InputSearch
          time={2000}
          ref={searchRef}
          onChange={changeSearchText}
          placeholder='Busca personajes por nombre'
        />
      </div>
      <div className={styles.cards}>
        {
          CharacterStore.characterPagination.characters.map((character, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              {
                CharacterStore.fetchStates.getCharacters !== 'loading'
                ?
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={character.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                    <div className={styles.tags}>
                      <Tag
                        color='green-50'
                        text={character.species}
                      />
                      <Tag
                        color='red-50'
                        text={character.gender}
                      />
                    </div>
                    
                  </CardContent>
                </CardActionArea>
                :
                <CardActionArea>
                  <Skeleton animation='wave' className={styles.skeleton_image} />
                  <CardContent>
                    <Skeleton animation='wave' />
                    <div className={styles.tags}>
                      <Skeleton animation='wave' />
                      <Skeleton animation='wave' />
                    </div>
                  </CardContent>
                </CardActionArea>
              }
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions> */}
            </Card>
          ))
        }
      </div>
      {/* <Table>
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
      </Table> */}


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
