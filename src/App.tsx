import style from './App.module.css'
import iconLogo from './assets/calculator.png'
import iconGithub from './assets/github.png'
import { MouseEventHandler, useState } from 'react'
import { buttonsCalculator , checkInputCalculator} from './helpers/calculator'
import { GridCalculator } from './components/GridItem'


const App = () => {
  let [calculatorHistory , setCalculatorHistory] = useState<string>('')
  let [calculatorTotal , setCalculatorTotal] = useState<number | string>(5)
  
  const addInput = (input:string) => {
    let checkInput = checkInputCalculator(input)

    if (checkInput == 'ce') {
      setCalculatorHistory('')
      return setCalculatorTotal(0)
    }
    if(checkInput == 'c') {
      return setCalculatorTotal(calculatorTotal = 0)
    }
    setCalculatorHistory(calculatorHistory.concat(checkInput))
    setCalculatorTotal(calculatorTotal = checkInput)
  }

  return(
    <div className={style.main}>
      
      <div className={style.headerContainer}>
        <img src={iconLogo} alt="" width={25} title='Flaticon'/>
        <h2 className={style.titleMain}>Calculadora Simples</h2>
      </div>
    
      <section className={style.displayCalculator}>
        <div className={style.displayTop}>
          <div className={style.historic}>{calculatorHistory}</div>
          <div className={style.result}>{calculatorTotal}</div>
        </div>

        <div className={style.displayBottom}>
          <div className={style.containerDisplay}>

            {buttonsCalculator.map((item , key) => (
              <GridCalculator 
                key={key} 
                item={item}
                onClick={e => {addInput(e.target.value)}} />
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
