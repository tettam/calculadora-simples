import { Buttons, buttonsCalculator } from '../helpers/calculator';
import style from './styles/GridItem.module.css'

type Props = {
  item: Buttons;
  onClick: (e:MouseEvent<HTMLInputElement>) => void
}

export const GridCalculator = ({ item , onClick}:Props) => {
  return (
    <div className={style.main}>
      <input
        onClick={e => onClick(e)}
        className={style.buttonsNumber}
        type="button" value={item.button}
        style={{backgroundImage: `linear-gradient(${item.color[0]},${item.color[1]})`}}
      />
    </div>
  )
}  