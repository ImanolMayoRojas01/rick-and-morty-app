import { FaSearch } from 'react-icons/fa'
import styles from './styles.module.scss'
import { forwardRef } from 'react'
import { debounce } from 'debounce'
import clsx from 'clsx'

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
      <div
        className={clsx([
          styles.container,
          classnames || ''
        ])}
      >
        <input
          type="text"
          placeholder={placeholder}
          ref={ref}
          onChange={onChangeDebounce}
          className={styles.input}
        />
        <div className={styles.icon}>
          <FaSearch size={20} />
        </div>
      </div>
    );
  }
);

export default InputSearch;