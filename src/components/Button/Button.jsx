import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, text, id, onClick }) => {
  return (
    <button className={styles.btn} id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
