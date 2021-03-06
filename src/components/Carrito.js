import { Component } from "react"
import BubbleAlert from "./BubbleAlert"
import DetallesCarro from './DetallesCarro'

const styles = {
    carrito: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',

    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carrito extends Component{

    render(){

        const { carrito, esCarroVisible, mostrarCarrito } = this.props
        const cantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0)

        return(
            <div>
                <span style={styles.bubble} >
                    { cantidad !== 0
                        ? <BubbleAlert value={cantidad}/>
                        : null
                    }
                </span>
                <button onClick={mostrarCarrito} style={styles.carrito}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carrito={carrito} /> : null}
                
            </div>
        )
    }
}

export default Carrito