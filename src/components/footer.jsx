import React from 'react'
import s from '../stylesheets/footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBox}>
            <div className={s.logo}>
                logo hz
            </div>
            <div className={s.cnt}>
                cnt hz
            </div>
            <div className={s.ard}>
                adr hz
            </div>
        </div>
    )
}
