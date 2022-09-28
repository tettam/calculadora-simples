import style from './App.module.css'
import iconGithub from './assets/github.png'
import iconLogo from './assets/calculator.png'

import { useState , MouseEvent } from 'react'
import { GridCalculator } from './components/GridItem'
import { buttonsCalculator } from './helpers/calculator'


const App = () => {
  let [historic , setHistoric] = useState<string>('')
  let [totalResult , setTotalResult] = useState<number>(0)
  let [selectedButton , setSelectedButton] = useState<any>('0')
  let [selectedNumber , setSelectedNumber] = useState<number>()
  let [selectedOperator , setSelectedOperator] = useState<string>()
  let [resultOrInput , setResultOrInput] = useState<boolean>(true)


  const addInput = (input:any) => {
    switch (input) {
      case '+':
      case '-':
      case 'x':
      case '/':
        selectedOperator = input
        setResultOrInput(resultOrInput = true)
        setSelectedNumber(selectedNumber = parseInt(selectedButton))
        setSelectedButton(selectedButton = '')                             //Reset seletect number
        setHistoric(historic = `${historic}${selectedNumber}  ${input}  `) //Save history
        setTotalResult(totalResult = parseInt(`${totalResult}${selectedOperator}${selectedNumber}`))
        console.log('totalResult ', totalResult)
        console.log('operator ', selectedOperator)
        console.log('numero ', selectedNumber)
        break;
      case 'ce':
        setResultOrInput(resultOrInput = true)
        setTotalResult(0)
        break;
      case 'c':
        setHistoric('')
        setSelectedButton('')
        setSelectedOperator('')
        setResultOrInput(true)
        setTotalResult(0)
        break;
      case '=':
        console.log(input)
        break;
      default:
        setResultOrInput(false)
        setSelectedButton(selectedButton = selectedButton.concat(input))
        break;
    }
    
  }

  return(
    <div className={style.main}>
      
      <div className={style.headerContainer}>
        <img src={iconLogo} alt="" width={25} title='Flaticon'/>
        <h2 className={style.titleMain}>Calculadora Simples</h2>
      </div>
    
      <section className={style.displayCalculator}>
        <div className={style.displayTop}>
          <div className={style.historic}>{historic}</div>
          <div className={style.result}>{(resultOrInput) ? totalResult : selectedButton}</div>
        </div>

        <div className={style.displayBottom}>
          <div className={style.containerDisplay}>

            {buttonsCalculator.map((item , key ) => (
              <GridCalculator 
                key={key} 
                item={item}
                onClick={e => {addInput(e.target.value)}} 
              />
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
