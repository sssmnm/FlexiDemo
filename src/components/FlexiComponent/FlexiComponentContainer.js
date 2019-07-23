import React, {Component} from 'react';
import flexiConfig from './includes/FlexiConfigData';
import CustomFormElement from './includes/CustomFormElement';

export class FlexiComponentContainer extends Component {
  constructor(props) {
    super(props);
    // we can add state of the label names that we are going to add here
    this.state = {
      options: flexiConfig.items[1].values,
      value: flexiConfig.items[1].values[0],
      person_name: '',
      states: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert('Your data is: ' + this.state.person_name + ' ' + this.state.states);
    event.preventDefault();
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomFormElement flexiConfig={flexiConfig} handleChange={this.handleChange}/>
        <input type="submit" value="Submit" className="position-submit" />
      </form>
    );
  }
}

export default FlexiComponentContainer;
