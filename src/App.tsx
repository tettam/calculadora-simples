import style from './App.module.css'
import { Calculator , Buttons} from './components/Calculator'


import iconCalc from './assets/calculator.png'
import  iconGithub  from './assets/github.png'
import { useState } from 'react'


const App = () => { 
  const [result , setResult] = useState<number>(0)
  const [newResult , setNewResult] = useState<number>(0)
  const [historic , setHistoric] = useState<string>('')

  const calculate = (operators:string) => {

    switch (operators) {
      case '+':
        setNewResult(newResult + result)
        console.log('Novo resultado ', newResult)
        break;
    
      default:
        break;
    }
  }
  

  const onDigitNumber = (digit:any):void => {
      setResult(parseInt(`${result}${digit}`))
      console.log('Resultado ', result)
    
    
  }

  const onClearResult = () => {
    setResult(0)
    setHistoric('')
    setNewResult(0)
    console.log('Limpar')
  }

  const onDigitEqual = () => {
    console.log('Igual')
  }

  const onDigitOperator = (operators:any):void => {
    calculate(operators)
    historicFull(operators)
    console.log(operators)
  }

  const onDigitPoint = () => {
    console.log('Ponto')
  }

  const historicFull = (operators:Buttons) => {
    setHistoric(`  ${result} ${operators}  `)
  }

  return(
    <div>
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
            <div className={style.historic}>{historic}</div>
            <div className={style.calculatorNumbers}>
            {result}
            </div>
          </div>

          <div className={style.displayNumbers}>
            <Calculator 
              onDigitNumber={onDigitNumber}
              onClearResult={onClearResult}
              onDigitEqual={onDigitEqual}
              onDigitOperator={onDigitOperator}
              onDigitPoint={onDigitPoint}
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
