import { FC } from 'react'
import styles from './styles.module.scss'
import { CharacterEntity, CharacterSpecieType } from '../../core/models/store/character.models'
import { Typography } from '@mui/material'
import clsx from 'clsx'

type TagColor = 'green-50' | 'red-50' | ''

type TagProps = {
  color: TagColor
  text: string
}

const Tag: FC<TagProps> = ({ text, color }) => {
  return (
    <div
      className={clsx([
        styles.container,
        styles['color-' + color]
      ])}
    >
      <Typography variant="body1">
        {text}
      </Typography>
    </div>
  )
}

export default Tag