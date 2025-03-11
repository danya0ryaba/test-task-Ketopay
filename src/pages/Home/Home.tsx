import { useEffect } from 'react'
import { DayBlock } from '../../components/DayBlock/DayBlock'
import { useAppDispatch } from '../../store/hooks/redux'
import { getArticles } from '../../store/reducers/useArticles'

import style from './Home.module.scss'

export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getArticles())
    }, [])

    return (
        <div className={style.home}>
            <DayBlock />
        </div>
    )
}
