import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./services.css"
import serv1 from "../../images/i.png";
import serv2 from "../../images/notebook.png";
import serv3 from "../../images/klyuch.png";
import serv4 from "../../images/car.png";
import { useEffect } from 'react';

export const Services = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
          once: false
        });
      }, []);

  return (
    <div className="services">
        <div className="container">
            <p className="p__chapter">
                {t('services')}
            </p>
            <div className="flex-center services__wrapper">
                <div className="service flex-center" data-aos="fade-right"><p>{t("serv1")}</p><img src={serv1} alt="service" /></div>
                <div className="service flex-center" data-aos="fade-left"><p>{t("serv2")}</p><img src={serv2} alt="service" /></div>
                <div className="service flex-center" data-aos="fade-up"><p>{t("serv3")}</p><img src={serv3} alt="service" /></div>
                <div className="service flex-center" data-aos="fade-up"><p>{t("serv4")}</p><img src={serv4} alt="service" /></div>
            </div>
        </div>
    </div>
  )
}
