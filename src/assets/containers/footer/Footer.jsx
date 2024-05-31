import { t } from "i18next";
import React from "react";
import logo from "../../images/logoDark.png";
import "./footer.css";
import { FaInstagram } from 'react-icons/fa';4
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex-center">
        <div className="first">
          <img src={logo} alt="logo" />
          <p>{t("subscribe")}</p>
          <div className="flex-center icons">
            <a
              href="https://www.instagram.com/ataev_bahodir_build"
              class="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556409174910&mibextid=LQQJ4d"
              class="social-icon"
            >
              <FaFacebookF/>
            </a>
          </div>
        </div>
        <div className="second">
          <p>{t("our-company")}</p>
          <a href="#">{t("korxona")}</a>
          <a href="#">{t("about")}</a>
          <a href="#">{t("news")}</a>
          <a href="#">{t("ourprojects")}</a>
        </div>
        <div className="third">
          <p>{t("aloqa")}</p>
          <a href="">+998974839999</a>
          <a href="">+998997126666</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
