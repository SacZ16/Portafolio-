import style from './Carta.module.css'

export default function Carta({width,fontSize,texto}) {
  return (
    <div className={style.ContenedorCarta} style={{width:width,fontSize:fontSize}}>{texto}</div>
  )
}
