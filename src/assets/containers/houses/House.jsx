import React from "react";
import "./house.css";
import house1 from "../../images/house2.jpg";
import house2 from "../../images/house2.jpg";
import house3 from "../../images/house3.jpg";
import house4 from "../../images/house4.jpg";
import house5 from "../../images/house5.jpg";
import house6 from "../../images/house6.jpg";
import { useTranslation } from "react-i18next";


const House = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className="houses">
        <p className="p__chapter">{t('home')}</p>
      <div className="flex-center house__holder">
        <img src={house1} alt="house" className="house" />
        <img src={house2} alt="house" className="house" />
        <img src={house3} alt="house" className="house" />
        <img src={house4} alt="house" className="house" />
        <img src={house5} alt="house" className="house" />
        <img src={house6} alt="house" className="house" />
        
      </div>
    </div>
  );
};

export default House;
