import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import "./news.css"
import news1 from "../../images/news1.jpg";
import news2 from "../../images/news2.jpg";
import news3 from "../../images/news3.jpg";
import news4 from "../../images/news4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false 
        });
    }, []);

    const data = [
        {
            title: "newtitle1",
            about: "newabout1",
            img : news1,
            dataaos: "fade-right"
        },
        {
            title: "newtitle2",
            about: "newabout2",
            img : news2,
            dataaos: "fade-left"
        },
        {
            title: "newtitle3",
            about:"newabout3",
            img : news3,
            dataaos: "fade-up"
        },
        {
            title: "newtitle4",
            about: "newabout4",
            img : news4,
            dataaos: "fade-up"
        }
    ]
  return (
    <div className="news">
        <div className="container">
            <h1>{t("allnews")}</h1>
            <div className="flex-center flexible">
                {data.map((item, i) => (
                    <div className="news__holder flex-center" key={i} data-aos = {item.dataaos}>
                        <img src={item.img} alt="image" />
                        <div className="news__item ">
                            <div className="animator"></div>
                            <h2>{t(item.title)}</h2>
                            <p>{t(item.about)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default News
