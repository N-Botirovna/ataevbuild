import React from 'react'
import { useEffect } from 'react'
import "./about.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t, i18n} = useTranslation();
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: "ease-in-out",
          once: false,
        });
      }, []);
  return (
    <div className='about'>
        <div className="container">
            <div className="about-holder">
            <h4 >ATAEV BAHODIR BUILD</h4>
            <div className="upMpver" data-aos = "fade-up">
            <h2  >ATAEV BAHODIR <br /> BUILD</h2>
            <p className='about__prh' >{t("about-prh")}</p>
            </div>
            <button className='btn'>{t("more")}</button>
            </div>
        </div>
      
    </div>
  )
}

export default About
