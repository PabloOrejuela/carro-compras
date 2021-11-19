import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {
    productos: [
      { name: 'Tomate', price: 0.50, img: '/productos/tomate.jpg' },
      { name: 'Alverjas', price: 1.00, img: '/productos/alverjas.jpg' },
      { name: 'Lechuga', price: 0.50, img: '/productos/lechuga.jpg' }
    ]
  }

  render(){
    return(
      <div>
        <p>Hola Mundo </p>
      </div>
    )
  }
}


export default App;
