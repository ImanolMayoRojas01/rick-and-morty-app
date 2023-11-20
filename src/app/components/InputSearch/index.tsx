import styles from './styles.module.scss'
import { forwardRef } from 'react'
import { debounce } from 'debounce'
import { TextField } from "@mui/material"

type InputSearchProps = {
  placeholder?: string
  onChange(): void;
  time: number;
  classnames?: string
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ placeholder, time, onChange, classnames }, ref) => {

    const onChangeDebounce = debounce(onChange, time);

    return (
      <TextField
        id="outlined-basic"
        label="Buscador"
        variant="outlined"
        ref={ref}
        onChange={onChangeDebounce}
      />
    );
  }
);

export default InputSearch;