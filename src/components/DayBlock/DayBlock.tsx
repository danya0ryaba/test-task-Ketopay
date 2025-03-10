import { Card } from '../Card/Card'
import { Title } from '../Title/Title'

import style from './DayBlock.module.scss'

const news = [1, 2]

export const DayBlock = () => {
    return (
        <div>
            <Title className={style.title}>News for 16.06.2023</Title>

            <div className={style.wrapper__card}>
                {news.map(item => <Card key={item} />)}
            </div>

        </div>
    )
}