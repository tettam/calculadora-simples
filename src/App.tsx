import style from './App.module.css'
import iconLogo from './assets/calculator.png'
import iconGithub from './assets/github.png'
import { MouseEvent , useState } from 'react'
import { buttonsCalculator , checkInputCalculator} from './helpers/calculator'
import { GridCalculator } from './components/GridItem'


const App = () => {
  let [calculatorHistory , setCalculatorHistory] = useState<string | any>('')
  let [result , setResult] = useState<number>(0)
  let [calculatorTotal , setCalculatorTotal] = useState<number>(0)
  let [numbersSelect , setNumbersSelect] = useState<any>(0)

  const addInput = (input:string) => {
    const checkInput = checkInputCalculator(input)

    if (checkInput == 'ce') {
      setCalculatorHistory('') // Clear history
      setNumbersSelect(0)
      setCalculatorTotal(0)
      return 
    }
    if (checkInput == 'c') {
      setNumbersSelect(0)
      return
    }
    if (checkInput == '+' || checkInput == '-' || checkInput == 'x' || checkInput == '/') {
      setCalculatorHistory(calculatorHistory.concat(`  ${checkInput}  `))
      switch (checkInput) {
        case '+':
          setCalculatorTotal(10)
          console.log('somar', calculatorTotal)
          break;
        case '-':
          setCalculatorTotal(calculatorTotal = calculatorTotal - numbersSelect)
          break;  
        case 'x':
          setCalculatorTotal(calculatorTotal = calculatorTotal * numbersSelect)
          break;
        case '/':
          setCalculatorTotal(calculatorTotal = calculatorTotal / numbersSelect)
          break;
        default: 'Error'
          break;
      }
      setNumbersSelect(0)
      return console.log(`Resultado da operação ${checkInput} `, calculatorTotal)
    }

    if ( checkInput == '=') {
      setNumbersSelect(numbersSelect = calculatorTotal)
      return
    }
    

    setCalculatorHistory(calculatorHistory.concat(checkInput))       // historic calculator
    setNumbersSelect(numbersSelect = parseInt(`${numbersSelect}${checkInput}`))  // salve numbers in an array
    console.log('Numero selecionado ' , checkInput)
    console.log('Numero total ', numbersSelect)
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
          <div className={style.result}>{numbersSelect}</div>
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
