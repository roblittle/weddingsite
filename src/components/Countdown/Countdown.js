import React from "react";
import { useTranslation } from 'react-i18next';

const Countdown = () => {
  const { t } = useTranslation();
  
  const currentTime = new Date();
  const weddingTime = new Date(2022, 11, 28, 16, 0);
  const timeUntil = weddingTime - currentTime;
  const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
  return (
        <div id="main">
          <br/>
        <div className="countdowntitle blink_me">
          {days} {t("countdown.days")}<br/>
        </div>
          <span id="until" className="bigger"> {t("countdown.until")} </span>
          <span id="ido" className="bigger" >{t("countdown.announce")}</span><br/>
          <span id="ido" className="bigger" >{t("countdown.get_married")}</span><br/>
          <br/>
          <span id="ido">{t("countdown.date")} | Santa Marta, Colombia</span>
      </div>
    );
}
export default Countdown;





