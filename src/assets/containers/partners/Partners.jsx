import React from 'react'
import { useTranslation } from 'react-i18next'
import "./partners.css";
import img1 from "../../images/hamkor1.jpg";
import img2 from "../../images/hamkor2.jpg";
import img3 from "../../images/hamkor3.jpg";
import img4 from "../../images/hamkor4.jpg";
import img5 from "../../images/hamkor5.jpg";
import img6 from "../../images/hamkor6.jpg";
import img7 from "../../images/hamkor7.jpg";
import img8 from "../../images/8.jpg";

const Partners = () => {
    const {t, i18n} = useTranslation();

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8
    ];

  return (
    <div className='partners'>
      <p className='p__chapter'>{t("partners")}</p>
      <div className="images flex-center">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} className="image"/>
        ))}
      </div>
    </div>
  )
}

export default Partners;
