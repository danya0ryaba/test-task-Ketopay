import { useNavigate } from 'react-router-dom'
import { Title } from '../../components/Title/Title'
import style from './Error.module.scss'

export const Error = () => {
    const navigate = useNavigate()
    return (
        <div className={style.error}>
            <Title>Ошибка</Title>
            <button onClick={() => navigate(-1)}>вернуться назад</button>
        </div>
    )
}