import style from './App.module.css'
import { Calculator , Buttons} from './components/Calculator'


import iconCalc from './assets/calculator.png'
import  iconGithub  from './assets/github.png'
import { useState } from 'react'


const App = () => { 
  const [result , setResult] = useState<number>(0)
  const [newResult , setNewResult] = useState<number>(0)
  const [operatorInput , setOperatorInput] = useState<string>('')
  const [showResultOperators , setShowResultOperators] = useState<boolean>(false)//true(newResult) false(result)
                                                                                 
  const calculate = () => {
    let opNumber = newResult
    switch (operatorInput) {
      case '+':
        opNumber += result
        break;
      case '-':
        opNumber -= result
        break;
      case 'x':
        opNumber *= result
        break;
      case '/':
        opNumber /= result
        break;
      default:
        console.log('Error')
        break;
    }
    setNewResult(opNumber)
    console.log(opNumber)
    console.log('calculado' , newResult)
    console.log('resultado', result)
    
  }
  
  const onDigitNumber = (digit:any):void => {
      setResult(parseInt(`${result}${digit}`))
      setShowResultOperators(false) 
  }

  const onClearResult = () => {
    setResult(0)
    setNewResult(0)
    setShowResultOperators(false)
  }

  const onDigitOperator = (operators:any):void => {
    setOperatorInput(operators)
    setNewResult(result)
    setResult(0)
  }

  const positiveOrNegative = () => {
    setResult(result * -1)
    setShowResultOperators(false)
  }

  const onDigitEqual = () => {
    calculate()
    setShowResultOperators(true)
  }

  const onDigitPoint = () => {
    console.log('ponto')
  }

  return(
    <div className={style.container}>
      <div className={style.main}>
        <header>
          <div className={style.headerTitle}>
            <img src={iconCalc} alt="" width={25}/>
            <h2>Calculadora Padrão</h2>
          </div>
        </header>

          <div className={style.displayCalculator}>
            <div className={style.infoMore}>
              <div className={style.time}>time</div>
              <div className={style.date}>data</div>
            </div>
            <div className={style.historic}></div>
            <div className={style.calculatorNumbers}>
            {showResultOperators ? newResult : result}
            </div>
          </div>

          <div className={style.displayNumbers}>
            <Calculator 
              onDigitNumber={onDigitNumber}
              onClearResult={onClearResult}
              onDigitEqual={onDigitEqual}
              onDigitOperator={onDigitOperator}
              onDigitPoint={onDigitPoint}
              positiveOrNegative={positiveOrNegative}
            />
          </div>
      </div>

      <footer>
        <h5>Desenvolvimento por Marco Tettamanti</h5>
        <a href="https://www.github.com/tettam" target='_blanck'><img src={iconGithub} alt="Ícone do site github" width={20} title='Github ícones criados por Freepik - Flaticon'/></a>
      </footer>
    </div>
  )
}

export default App
