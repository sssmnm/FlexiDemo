import React from 'react';
import PropTypes from 'prop-types';
import OptionsComponent from './OptionsComponent';

const CustomSelectElement = ({entity, handleChange}) => (
  <div className="position-input-elements">
    <label>
      {entity.label}
    </label>
      <select key={entity.name} name={entity.name} value={entity.value} onChange={handleChange}>
        <OptionsComponent 
          key={entity.value} 
          options={entity.values} 
        />
      </select>
  </div>
);

CustomSelectElement.prototype={
    entity: PropTypes.object,
    handleChange: PropTypes.func,
};
CustomSelectElement.defaultProps = {
    entity: {}
  };
export default CustomSelectElement;