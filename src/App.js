import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

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
        <NavBar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro = {() => console.log('Agregado')}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
