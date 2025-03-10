import { useState } from 'react'
import CloseIcon from '../../assets/close.svg'

import style from './Header.module.scss'

export const Header = () => {

    const [viewMenu, setViewMenu] = useState(false)

    return (
        <header className={style.header}>
            <div className={`${style.wrapper_burger} ${!viewMenu && style.burger__active}`}>
                <div className={style.header_burger} onClick={() => setViewMenu(true)}>
                    <span className={style.burger} />
                </div>
                <h1 className={style.title}>BESIDER</h1>
            </div>
            <nav className={`${style.nav} ${viewMenu && style.nav_active}`}>
                <ul className={style.nav__list}>
                    <li className={style.link}>SCIENCE</li>
                    <li className={style.link}>GENERAL</li>
                    <li className={style.link}>ENTERTAINMENT</li>
                    <li className={style.link}>TECHNOLOGY</li>
                    <li className={style.link}>BUSINESS</li>
                    <li className={style.link}>HEALTH</li>
                    <li className={style.link}>SPORTS</li>
                </ul>
            </nav>
            <span className={`${style.close} ${viewMenu && style.active}`} onClick={() => setViewMenu(false)}>
                <img src={CloseIcon} alt="close" />
            </span>
        </header>
    )
}