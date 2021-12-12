import React  from "react";
import { useTranslation } from 'react-i18next';
import Map from '../../components/Map/Map';

const Location = () => {
  const { t } = useTranslation();
    return (
      <div className="bg-text">
             <div className="container">
                <div className="row align-items-start">
                  <div className="col">
                    <div className="padding">
                      {t("location.main")}<br/>
                      {t("location.main2")}<br/><br/>
                      <Map id="map"/>
                    </div>
                  </div>
                 <br/>
                  <div className="col-md-auto location-blocks">
                    <br/>
                     <h3 className="gold"><b>Pozos Colorados</b></h3>
                     <br/>
                      <div className="">{t("location.pozo.main")}
                      </div>
                      <br/>
                      <img
                        className="d-block w-100 "
                        src="img/pozos.png"
                        alt="Pozos Colorados"
                      />
                      <br/>
                      <div className="gold">{t("location.belo.hotel_labels")}<br/></div>
                      <br/>
                      <a href="https://www.airbnb.ca/rooms/35546504?check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1000&federated_search_id=489cec57-189d-4b2c-a680-c371db3889f2&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.pozo.one")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/40251107?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=364ea5de-e5e8-4df9-ad3d-50d0b958916e&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.pozo.two")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/37534221?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=9a7768ad-8715-48d7-befa-24618286a7ff&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.pozo.three")}</a>,<br/>
                      <br/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-auto location-blocks">
                    <h3 className="gold"><b>Bello Horizonte</b></h3><br/>
                    <div className="">
                      {t("location.belo.main")}
                      <div className="gold">{t("location.belo.bride_groom")}</div>
                    </div>
                    <br/>
                      <img
                        className="d-block w-100 "
                        src="img/bellohorizante.png"
                        alt="Bello Horizonte"
                      /><br/>
                       <div className="gold">{t("location.belo.hotel_labels")}<br/></div>
                       <br/>
                       <a href="https://www.zuana.com/" target="_blank" rel="noreferrer">{t("location.belo.zuana")}</a>,<br/>
                       <a href="https://www.irotama.com/" target="_blank" rel="noreferrer">{t("location.belo.irotama")}</a>,<br/>
                       <a href="https://www.marriott.com/hotels/travel/smrmc-santa-marta-marriott-resort-playa-dormida/?gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2EfybDkiPmehueu7lRkMyGxCcaZMXu43Qknnalc0aejwXxzTkuP2o4aAlN3EALw_wcB&gclsrc=aw.ds" target="_blank" rel="noreferrer">{t("location.belo.marriott")}</a>,<br/>
                       <a href="https://planetofhotels.com/en/colombia/santa-marta/apartamento-en-sintana-resort" target="_blank" rel="noreferrer">{t("location.belo.sintana")}</a><br/>
                       <a href="https://www.airbnb.ca/rooms/45362230?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=76e55f04-40b4-4c24-af39-096429d6ff60&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.belo.one")}</a>,<br/>
                       <a href="https://www.airbnb.ca/rooms/18449765?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=76e55f04-40b4-4c24-af39-096429d6ff60&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.belo.two")}</a>,<br/>
                       <a href="https://www.airbnb.ca/rooms/17907239?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=76e55f04-40b4-4c24-af39-096429d6ff60&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.belo.three")}</a><br/>


                       <br/>
                  </div>
                  <div className="col-md-auto location-blocks">
                     <h3 className="gold"><b>El Rodadero</b></h3><br/>
                      <div className="">{t("location.elro.main")}</div>
                      <br/>
                      <img
                        className="d-block w-100 "
                        src="img/El_Rodadero.jpg"
                        alt="El Rodadero"
                      /><br/>
                      <div className="gold">{t("location.belo.hotel_labels")}<br/></div>
                      <br/>
                      <a href="https://www.airbnb.ca/rooms/39821514?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=2dde4447-fdba-44d4-8d79-4b62ed278a39&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.elro.one")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/33691316?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=db54aff1-6b5a-4468-a411-ddbfb03b96e5&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.elro.two")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/49128424?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=db54aff1-6b5a-4468-a411-ddbfb03b96e5" target="_blank" rel="noreferrer">{t("location.elro.three")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/8116556?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=eba9b8b8-72d9-4f78-90fe-135b24e903a7&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.elro.four")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/18734861?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=ffea9f4f-7fe6-4076-b985-649b121b05f0&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.elro.five")}</a><br/>
                      <br/>
                  </div>
                  
                  <div className="col location-blocks">
                  <h3 className="gold"><b>Santa Marta {t("location.sant.santa")}</b></h3><br/>
                    <div className="">{t("location.sant.main")}</div>
                    <br/>
                      <img
                        className="d-block w-100 "
                        src="img/santamarta1.png"
                        alt="Santa Marta"
                      /><br/>
                      <div className="gold">{t("location.belo.hotel_labels")}<br/></div>
                      <br/>
                      <a href="https://www.airbnb.ca/rooms/45397062?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=69b416ec-4f58-4849-a1a2-8802e55ab770&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.sant.one")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/3835728?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=69b416ec-4f58-4849-a1a2-8802e55ab770&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.sant.two")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/18343973?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=69b416ec-4f58-4849-a1a2-8802e55ab770&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.sant.three")}</a>,<br/>
                      <a href="https://www.airbnb.ca/rooms/39397537?location=Santa%20Marta%20-%20Magdalena%2C%20Colombia&check_in=2022-12-26&check_out=2022-12-30&previous_page_section_name=1001&federated_search_id=68de0cdf-90a4-40f3-920f-6eeac99de1f6&guests=1&adults=1" target="_blank" rel="noreferrer">{t("location.sant.four")}</a>,<br/>
                      <br/>
                  </div>
                </div>
              </div>
      </div>  
    );
  };
  export default Location;

