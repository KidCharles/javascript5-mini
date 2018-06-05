import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ['hey']
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    let mappedCars = this.state.cars.map(car => {
      return(
        <div>
          <p>{car.make}</p>
        </div> 
      )
    })
    return (
      <div className="App">
        <button onClick={()=>this.getCars()}>Get cars</button>
        <br/>
       {mappedCars}
      </div>
    );
  }
}

export default App;
