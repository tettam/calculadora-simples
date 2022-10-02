import style from './App.module.css'
import iconGithub from './assets/github.png'
import iconLogo from './assets/calculator.png'

import { useState , MouseEvent } from 'react'
import { GridCalculator } from './components/GridItem'
import { buttonsCalculator } from './helpers/calculator'


const App = () => {
  let [historic , setHistoric] = useState<string>('')
  let [totalResult , setTotalResult] = useState<number>(0)
  let [selectedButton , setSelectedButton] = useState<any>('')
  let [selectedNumber , setSelectedNumber] = useState<number>()
  let [selectedOperator , setSelectedOperator] = useState<string>()
  let [resultOrInput , setResultOrInput] = useState<boolean>(true)

  const checkOperators = (input:any):void => {
    selectedOperator != input 
      ? setSelectedOperator(selectedOperator = totalResult.toString()) 
      : setSelectedOperator(selectedOperator = input) 
    resultCalculator()
    console.log('Selecionado ', selectedButton)
    console.log('Input ', input)
    console.log('Resultado ', totalResult)
  }

  const inputNumber = (input:string):void => {
    setSelectedButton(selectedButton = `${selectedButton}${input}`)
  }

  const numberFloat = (input:string):void => {
    console.log('Numero decimal')
  }

  const resetInput = ():void => {
    setSelectedButton('')
    console.log('Numero digitado apagado')
  }
  
  const resetAll = ():void => {
    setHistoric('')
    setTotalResult(0)
    setSelectedButton('')
    console.log('Historico apagado')
  }

  const resultCalculator = ():void => {
    setSelectedNumber(selectedNumber = parseInt(selectedButton))
    if(selectedOperator == '+'){
      setTotalResult(totalResult + selectedNumber)
    } else if(selectedOperator == '-') {
      setTotalResult(totalResult - selectedNumber)
    } else if(selectedOperator == 'x'){
      setTotalResult(totalResult * selectedNumber)
    } else if(selectedOperator == '/') {
      setTotalResult(totalResult / selectedButton)
    }
    
    setSelectedButton('')
  }

  const historicAll = (input:string , check:string):void => {
    if(check == 'operators') {
      setHistoric(historic = `${historic}   ${input}   `)
    } else {
      setHistoric(historic = `${historic}${input}`)
    }
  }

  const showResultOrTotal = (trueOrfalse:boolean) =>{
    trueOrfalse == true ? setResultOrInput(true) :  setResultOrInput(false)
  }

  const checkInput = (input:any) => {  
    switch (input) {
      case '+':
      case '-':
      case 'x':
      case '/':
        historicAll(input , 'operators')
        checkOperators(input)
        resultCalculator()
        showResultOrTotal(true)
        break;
      case 'ce':
        resetInput()
        break;
      case 'c':
        resetAll()
        showResultOrTotal(true)
        break;
      case '=':
        resultCalculator()
        showResultOrTotal(true)
        break;
      case ',':
        numberFloat(input)
        break
      default:
        historicAll(input , 'number')
        inputNumber(input)
        showResultOrTotal(false)
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
                onClick={e => {checkInput(e.target.value)}} 
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
