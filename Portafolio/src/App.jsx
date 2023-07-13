import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Carta from './Componentes/Carta/Carta'
import Switch from './Componentes/Switch/Switch'
import githubsvg from "./assets/github.svg"
import cvsvg from "./assets/cv.svg"
import emailsvg from "./assets/email.svg"
import linkedinsvg from "./assets/linkedin.svg"

function App() {
  const [count, setCount] = useState(0)
  const experiencia = "+23 MESES de EXPERIENCIA en trabajo REAL"
  const sobreMi= "Programador Full Stack con experiencia en desarrollo web de extremo a extremo. Experto en JavaScript, frameworks como React y Node.js, y en la creación de soluciones escalables. Apasionado por el aprendizaje y la mejora continua en tecnologías y mejores prácticas."

  return (
    <div style={{display:'flex',justifyContent:'center',width:'100vw',flexDirection:'column'}}> 
  <div style={{width:'100vw',display:'flex',justifyContent:'center'}}>
    <div className={style.item1}>
    <span>Inicio</span>
    <span>Trabajos</span>
    <span>Proyectos</span>
    <Switch/>
  </div>
    </div>
    <div className={style.gridcontainerinicio}>
  <div className={style.item2}>{experiencia}</div>
  <div className={style.item3}><span style={{textAlign:'center',color:'#0072ff'}}>Alexis Coronel</span>{sobreMi}</div>
  <div className={style.item4}>tecnologias</div>
  <div className={style.item5}>
    <button><img src={githubsvg} alt={githubsvg}/><span>GitHub</span></button>
    <button><img src={cvsvg} alt={cvsvg}/><span>CV</span></button>
    <button><img src={linkedinsvg} alt={linkedinsvg}/><span>Linkedin</span></button>
    <button><img src={emailsvg} alt={emailsvg}/><span>Email</span></button>
    </div>
</div>     
    <div className={style.gridcontainertrabajo}>
  <div className={style.itemtrabajo1}>
    <span>Trabajos reales</span>
  </div>
  <div className={style.itemtrabajo2}>{experiencia}</div>
  <div className={style.itemtrabajo3}><span style={{textAlign:'center',color:'#0072ff'}}>Alexis Coronel</span>{sobreMi}</div>
  <div className={style.itemtrabajo4}>{experiencia}</div>
  <div className={style.itemtrabajo5}><span style={{textAlign:'center',color:'#0072ff'}}>Alexis Coronel</span>{sobreMi}</div>
  <div className={style.itemtrabajo6}>{experiencia}</div>
  <div className={style.itemtrabajo7}><span style={{textAlign:'center',color:'#0072ff'}}>Alexis Coronel</span>{sobreMi}</div>
  
</div>     
    </div>
  )
}

export default App
