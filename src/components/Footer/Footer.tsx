import NewsIcon from '../../assets/news_api.png'

import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <nav>
                <ul>
                    <li>Log In</li>
                    <li>About Us</li>
                    <li>Publishers</li>
                    <li>Sitemap</li>
                </ul>
            </nav>
            <span className={style.power}>Powered by</span>
            <img className={style.news__image} src={NewsIcon} alt="News Api" />
            <span className={style.copyright}>© 2023 Besider. Inspired by Insider</span>
        </footer>
    )
}