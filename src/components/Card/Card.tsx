import Image from '../../assets/image.png'

import style from './Card.module.scss'

export const Card = () => {
    return (
        <article className={style.card}>

            <div className={style.card__img}>
                <img src={Image} alt="image" />
            </div>

            <div className={style.card__info}>
                <h2 className={style.title}>CNN</h2>
                <p className={style.description}>
                    Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours
                </p>
                <data value="12" className={style.date}>Feb 26, 2023, 16.32 PM</data>
            </div>

        </article>
    )
}
