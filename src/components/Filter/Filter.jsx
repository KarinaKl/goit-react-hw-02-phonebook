import PropTypes from 'prop-types';
import styled from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={styled.filter}>
      Пошук
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
