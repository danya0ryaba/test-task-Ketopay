import { ReactNode } from 'react'

import style from './Title.module.scss'

type TitleType = {
    className?: string
    children: ReactNode
}

export const Title: React.FC<TitleType> = ({ children, className }) => {
    return (
        <h4 className={`${style.title} ${className}`}>{children}</h4>
    )
}
