import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/filter/filterAction';
import { filterSelectors } from '../../redux/filter/filterSelectors';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelectors.getFilter);

  const handleChange = event => {
    dispatch(changeFilterAction(event.target.value));
  };

  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        value={filter}
        className={styles.input}
        type="text"
        name="filter"
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
