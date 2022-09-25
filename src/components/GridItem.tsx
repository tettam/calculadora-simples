import { Buttons } from '../helpers/calculator';
import style from './styles/GridItem.module.css'

type Props = {
  item: Buttons
}

export const GridCalculator = ({ item }:Props) => {
  return (
    <div className={style.displayCalculator}>
      <input className={style.buttonsNumber} 
            type="button" value={item.button}
            width={item.width} height={item.height}
            style={{backgroundColor: item.color[0]}}
      />
    </div>
  )
}  