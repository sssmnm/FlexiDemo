import React from 'react';
import PropTypes from 'prop-types';

const CustomInputElement = ({entity, handleChange}) => (
  <div className="position-input-elements">
    <label>{entity.label}</label>
    <input
      name={entity.name}
      type="text"
      placeholder={entity.label}
      onChange={handleChange}
    />
  </div>
);

CustomInputElement.prototype = {
  entity: PropTypes.object,
  handleChange: PropTypes.func,
};
CustomInputElement.defaultProps = {
  entity: {},
};
export default CustomInputElement;
