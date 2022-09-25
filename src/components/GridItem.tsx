import { Buttons } from '../helpers/calculator';
import style from './styles/GridItem.module.css'

type Props = {
  item: Buttons
}

export const GridCalculator = ({ item }:Props) => {
  return (
    <div className={style.main}>
      <input className={style.buttonsNumber} type="button" value={item.button} 

      style={{backgroundImage: `linear-gradient(${item.color[0]},${item.color[1]})`}}
      />
    </div>
  )
}  