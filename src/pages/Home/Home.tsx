import { DayBlock } from '../../components/DayBlock/DayBlock'
import style from './Home.module.scss'

export const Home = () => {
    return (
        <div className={style.home}>
            <DayBlock />
        </div>
    )
}
