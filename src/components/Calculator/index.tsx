import { FunctionComponent } from 'react'
import style from './Calculator.module.css'

export type Buttons = {
  operators: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  digit: '+' | '-' | 'x' | '÷'
}

interface CalculatorProps  {
  onDigitNumber: (digit: Buttons | number) => void
  onDigitOperator: (operators: Buttons | string) => void
  onClearResult: () => void
  onDigitEqual: () => void
  onDigitPoint: () => void
}

export const Calculator:FunctionComponent<CalculatorProps> = ({
  onDigitNumber,
  onDigitOperator,
  onDigitEqual,
  onDigitPoint,
  onClearResult
}) => {
  
  return (
    <div className={style.main}>
      <input className={style.inputButton} type="button" value={'C'}  onClick={onClearResult}/>
      <input className={style.inputButton} type="button" value={'+/-'} />
      <input className={style.inputButton} type="button" value={'÷'} onClick={() => onDigitOperator('/')}/>
      <input className={style.inputButton} type="button" value={'x'} onClick={() => onDigitOperator('x')}/>
      <input className={style.inputButton} type="button" value={7} onClick={() => onDigitNumber(7)}/>
      <input className={style.inputButton} type="button" value={8} onClick={() => onDigitNumber(8)}/>
      <input className={style.inputButton} type="button" value={9} onClick={() => onDigitNumber(9)}/>
      <input className={style.inputButton} type="button" value={'-'} onClick={() => onDigitOperator('-')} />
      <input className={style.inputButton} type="button" value={4} onClick={() => onDigitNumber(4)}/>
      <input className={style.inputButton} type="button" value={5} onClick={() => onDigitNumber(5)}/>
      <input className={style.inputButton} type="button" value={6} onClick={() => onDigitNumber(6)}/>
      <input className={style.inputButton} type="button" value={'+'} onClick={() => onDigitOperator('+')} />
      <input className={style.inputButton} type="button" value={1} onClick={() => onDigitNumber(1)}/>
      <input className={style.inputButton} type="button" value={2} onClick={() => onDigitNumber(2)}/>
      <input className={style.inputButton} type="button" value={3} onClick={() => onDigitNumber(3)}/>
      <input className={style.inputButton} 
        style={{backgroundColor: '#1d6978' , gridRow: '4 / 6' , gridColumn: '4 / 5'}} 
        type="button" 
        value={'='} 
        onClick={onDigitEqual}
        />
      <input className={style.inputButton}
        style={{gridColumn: '1 / 3'}}
        type="button" value={0}
        onClick={() => onDigitNumber(0)}
        />
        
      <input className={style.inputButton} type="button" value={'.'} onClick={onDigitPoint}/>
    </div>
  )
}