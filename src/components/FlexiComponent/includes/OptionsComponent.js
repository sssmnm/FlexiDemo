import React from 'react';
import PropTypes from 'prop-types';

const OptionsComponent = ({options}) => {
  let optionArray = [];
  for (let i = 0; i < options.length; i++) {
    optionArray.push(<option key={options[i]} value={options[i]}>{options[i]}</option>);
  }
  return optionArray;
};

OptionsComponent.prototype = {
  options: PropTypes.array,
};
OptionsComponent.defaultProps = {
  options: '',
};
export default OptionsComponent;
