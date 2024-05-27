import React from 'react'
import { useTranslation } from 'react-i18next';
import "../../../containers/header/header.css"
import logo from "../../../images/logo.png"

export default function Navbar() {
    const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    const selLng = e.target.value;
    i18n.changeLanguage(selLng);
  };
  return (
    <div className="navbar">
        <div className="container flex-center">
        <ul className="links flex-center">
          <li>
            <a href="#" className="link">{t("info")}</a>
          </li>
          <li>
            <a href="#" className="link">{t("about")}</a>
          </li>
          <li>
            <a href="#" className="link">{t("korxona")}</a>
          </li>
          <li>
            <a href="#" className="link"><img src={logo} alt="" className="logo" /></a>
          </li>
          <li>
            <a href="#" className="link">{t("advan")}</a>
          </li>
          <li>
            <a href="#" className="link">{t("news")}</a>
          </li>
          <li>
            <a href="#" className="link">{t("aloqa")}</a>
          </li>
          <li>
            <select name="Lng" id="Lng" onChange={handleChange}>
            <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}
