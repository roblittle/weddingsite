import React from "react";
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

const AboutUs = () => {
  const { t } = useTranslation();
    return (
      <div id="parent">
            <br/>
             <div className="container">
                <div className="row">
                  <div className="col">
                  <Card.Title><h1>{t("about_us.title")}</h1></Card.Title>
                    <div className="padding">
                      {t("about_us.main2")}
                      <br/>
                      <br/>
                      {t("about_us.main3")}
                      <br/>
                      <br/>
                      {t("about_us.main4")}
                      <br/>
                      <br/>
                      <br/>
                      <Card.Title className="gold">{t("about_us.withlove")} </Card.Title>
                      <div className="gold">{t("about_us.who")}</div>
                      <br/>
                      <br/>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <img
                        src='img/rm_engage.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-auto">
                    <img
                        src='img/rm_date.jpeg'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div className="col">
                    <img
                        src='img/rm_laugh.jpeg'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                  <div className="col-md-auto">
                    <img
                        src='img/rm_vegas.JPG'
                        alt="r&m"
                        className="dress-img-big"
                      />
                  </div>
                </div>
              </div>
      </div>   
    );
  };
  export default AboutUs;