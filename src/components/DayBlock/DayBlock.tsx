import { useAppSelector } from '../../store/hooks/redux'
import { Card } from '../Card/Card'
import { Title } from '../Title/Title'

import style from './DayBlock.module.scss'

export const DayBlock = () => {
    const { list, isLoading, error } = useAppSelector(state => state.articlesReducer)
    console.log(list, isLoading, error);
    return (
        <div className={style.day__block}>
            <Title className={style.title}>News for 16.06.2023</Title>
            <div className={style.wrapper__card}>
                {[1, 2].map(item => <Card key={item} />)}
            </div>
        </div>
    )
}