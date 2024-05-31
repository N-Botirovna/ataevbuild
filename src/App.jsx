import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./assets/components/template/navbar/Navbar";
import About from "./assets/containers/about/About";
import Footer from "./assets/containers/footer/Footer";
import { Header } from "./assets/containers/header/Header";
import House from "./assets/containers/houses/House";
import Message from "./assets/containers/message/Message";
import News from "./assets/containers/news/News";
import Partners from "./assets/containers/partners/Partners";
import { Projects } from "./assets/containers/projects/Projects";
import { Rating } from "./assets/containers/rating/Rating";
import { Services } from "./assets/containers/xizmatlar/Services";

function App() {
  
  return (
    <>
    <Header/>
    <Services/>
    <Rating/>
    <House/>
    <Projects/>
    <News/>
    <Partners/>
    <About/>
    <Message/>
    <Footer/>
    </>
  );
}
export default App;


