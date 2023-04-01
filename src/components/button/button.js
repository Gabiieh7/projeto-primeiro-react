import './button.css'

const Button = ({label}) => {
    function mostrarLabel(label) {
        alert(`A label desse botão é "${label}"`)
    }
    return <button className="btn" onClick={()=>{mostrarLabel(label)}}>{label}</button>
}
export default Button