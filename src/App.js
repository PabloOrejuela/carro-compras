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
    ],
    carrito: [],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {

    const { carrito } = this.state
    if (carrito.find(x => x.name === producto.name)) {
      const newCarrito = carrito.map(x => x.name === producto.name
        ? ({
          ...x, 
          cantidad: x.cantidad + 1
        })
        : x
        ) 
        return this.setState({carrito: newCarrito})
    }
    
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarrito = () => {
    if (!this.state.carrito.length) {
      return
    }
    //Al dar click cambia la visibilidad de false a true
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render(){
    const { esCarroVisible } = this.state
    return(
      <div>
        <NavBar 
          carrito={this.state.carrito} 
          esCarroVisible={esCarroVisible}
          mostrarCarrito={this.mostrarCarrito} 
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
