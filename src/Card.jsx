//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './style.card.scss'

export function Card (props) {
  return (
    <div className="checkpoint-card-component" style={{backgroundColor:props.values.codigo}}>
    <div className='cardItem'>
      <p id='square'>{props.values.color}</p>
      <h1>{props.values.codigo}</h1>
      </div>
    </div>

    
  )
}