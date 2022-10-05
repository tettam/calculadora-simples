import style from './App.module.css'
import { Calculator } from './components/Calculator'


import iconCalc from './assets/calculator.png'
import  iconGithub  from './assets/github.png'



const App = () => { 
  const onDigitNumber = () => {
    console.log('Numero')
  }

  const onClearResult = () => {
    console.log('Limpar')
  }

  const onDigitEqual = () => {
    console.log('Igual')
  }

  const onDigitOperator = () => {
    console.log('Operador')
  }

  const onDigitPoint = () => {
    console.log('Ponto')
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
            <div className={style.historic}>123</div>
            <div className={style.calculatorNumbers}>
            ...
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
