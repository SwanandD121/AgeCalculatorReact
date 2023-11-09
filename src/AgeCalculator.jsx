import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      age: null
    };
  }

  handleInputChange = (event) => {
    this.setState({ birthDate: event.target.value });
  }

  calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    if (isNaN(birthDate)) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    this.setState({ age });
  }

  render() {
    return (
      <div className='flex flex-col items-center gap-6 '>
        <h1 className='text-4xl p-5 font-bold relative'>Age Calculator</h1>
        <h2 className='text-xl font-bold'>Enter your Date of birth.</h2>
        <input className='border-black border-2 rounded-md w-48 text-center'
          type="date"
          value={this.state.birthDate}
          onChange={this.handleInputChange}
        />
        <button className='text-lg bg-blue-500 w-40 p-2 rounded-lg text-white hover:bg-blue-700' onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p className='text-lg font-bold'>You are {this.state.age} years old.</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
