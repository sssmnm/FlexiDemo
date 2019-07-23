import React,{ Fragment} from 'react';
import PropTypes from 'prop-types';
import CustomInputElement from './CustomInputElement';
import CustomSelectElement from './CustomSelectElement';

const CustomFormElement = ({flexiConfig, handleChange}) => {
    let formElementArray = [];
    flexiConfig.items.forEach((entity, index) => {
      if (entity.type === 'TextField') {
        formElementArray.push(
          <CustomInputElement
            key={entity.label}
            entity={entity}
            handleChange={handleChange}
          />
        );
      }
      if (entity.type === 'Dropdown') {
        formElementArray.push(
          <CustomSelectElement
            key={entity.label}
            entity={entity}
            handleChange={handleChange}
          />
        );
      }
    });
    return <Fragment>{formElementArray}</Fragment>;
  };

  CustomFormElement.prototype = {
    flexiConfig: PropTypes.object,
    handleChange: PropTypes.func,
};
CustomFormElement.defaultProps = {
    flexiConfig: {},
};
export default CustomFormElement;
