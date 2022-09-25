import style from './App.module.css'
import iconLogo from './assets/calculator.png'
import iconGithub from './assets/github.png'
import { useState } from 'react'
import { buttonsCalculator} from './helpers/calculator'
import { GridCalculator } from './components/GridItem'


const App = () => {
  let [calculatorString , setCalculatorString] = useState<string>('40')
  let [calculatorTotal , setCalculatorTotal] = useState<number>(0)
  
  
  return(
    <div className={style.main}>
      
      <div className={style.headerContainer}>
        <img src={iconLogo} alt="" width={25} title='Github ícones criados por Freepik - Flaticon'/>
        <h2 className={style.titleMain}>Calculadora Simples</h2>
      </div>
    
      <section className={style.displayCalculator}>
        <div className={style.historic}>{calculatorString}</div>
        <div className={style.result}>{calculatorTotal}</div>
        <div className={style.displayButtons}>

          <div className={style.containerDisplay}>
            {buttonsCalculator.map((item , key) => (
              <div key={key}>{item.button}</div>
            ))}
          </div>

        </div>
      </section>

      <footer>
        <h5>Desenvolvimento por Marco Tettamanti</h5>
        <a href="https://www.github.com/tettam" target='_blanck'><img src={iconGithub} alt="Ícone do site github" width={20} title='Github ícones criados por Freepik - Flaticon'/></a>
      </footer>
    </div>
  )
}

export default App
