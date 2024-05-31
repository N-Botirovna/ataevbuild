import { t } from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./projects.css";
import image1 from "../../images/projects1.webp";
import image2 from "../../images/projects6.webp";
import image3 from "../../images/projects3.webp";
import image4 from "../../images/projects4.webp";
import image5 from "../../images/projects5.webp";
import image6 from "../../images/projects6.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(-1)

  const datas = [
    {
      title: "Magic City",
      about: "projects1",
      backgroundImage: image1,
      dataaos: "fade-right",
    },
    {
      title: "Gardens Residence",
      about: "projects2",
      backgroundImage: image2,
      dataaos: "fade-left",
    },
    {
      title: "Fonon",
      about: "projects3",
      backgroundImage: image3,
      dataaos: "fade-right",
    },
    {
      title: "invento",
      about: "projects1",
      backgroundImage: image4,
      dataaos: "fade-left",
    },
    {
      title: "Presidential school",
      about: "projects2",
      backgroundImage: image5,
      dataaos: "fade-right",
    },
    {
      title: "Boulevard",
      about: "projects3",
      backgroundImage: image6,
      dataaos: "fade-left",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="projects">
      <div className="container">
        <h1>{t("ourprojects")}</h1>
        <div className="flex-center projects__wrapper">
          {datas.map((item, i) => (
            <div
              
              className="flex__item "
              key={i}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6),rgba(0,0,0, 0.3)),url(${item.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-aos={item.dataaos}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              {i === isHovered ? (
                <div data-aos="fade-up">
                <h2 >{item.title}</h2>
                <p >{t(item.about)}</p>
                </div>
              ):
              (
                <>
                <h2 >{item.title}</h2>
                <p >{t(item.about)}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
