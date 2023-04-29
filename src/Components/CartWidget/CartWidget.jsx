import "./CartWidget.css";

const CartWidget = () => {
    const imgCArrito ="https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div className="divCarrito">
        <img className="imgCArrito" src={imgCArrito} alt="Carrito.png" />
        <strong>0</strong>
    </div>
  )
}

export default CartWidget
