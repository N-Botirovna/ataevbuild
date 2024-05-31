
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./rating.css";
import { useTranslation } from "react-i18next";


export const Rating = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const countUpRefs = useRef([]);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            setStartCounting(true);
          } else {
            setStartCounting(false);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    countUpRefs.current.forEach((ref, index) => {
      observer.observe(ref.parentElement);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="rating">
      <div className="container">
        <h1>{t("our-company")}</h1>
        <div className="flex-center rating__inner">
          {[
            { end: 120, label: "num" },
            { end: 43, label: "obj" },
            { end: 250, label: "equipment" },
            { end: 2, label: "years" },
          ].map((item, index) => (
            <div className="rating__holder" key={index}>
              <span
                className="flex-center rating__item"
                data-index={index}
                ref={(ref) => (countUpRefs.current[index] = ref)}
              >
                <CountUp
                  start={startCounting ? 0 : item.end}
                  end={item.end}
                  duration={5}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                />
                <span>+</span>
              </span>
              <p>{t(item.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
