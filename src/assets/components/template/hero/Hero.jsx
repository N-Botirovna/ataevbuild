import React from 'react'
import { useTranslation } from 'react-i18next'
import "../../../containers/header/header.css"

export const Hero = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className="hero">
        <h2 className="title">
            Ataev <br /> Bahodir build
        </h2>
        <p className="paragraph">{t('prh')}</p>
        <div className="btn-group flex-center">
            <button className="btn">{t('ourprojects')}</button>
            <button className="btn">{t('connect')}</button>
        </div>
    </div>
  )
}
