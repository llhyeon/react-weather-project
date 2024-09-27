import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import cloudy from "../assets/cloudy.png";
import sunny from "../assets/sunny.png";
import rainny from "../assets/rainny.png";
import snowy from "../assets/snowy.png";
import tempFormatter from "../lib/tempFormatter";

const Modal = ({ setModal, weatherData, city }) => {
  const [weatherImg, setWeatherImg] = useState();
  const { temp, feels_like, temp_min, temp_max, humidity } = weatherData.main;
  const { main } = weatherData.weather[0];
  console.log(main);
  const handleOffModal = () => {
    setModal(false);
  };

  const [humidWord, setHumidWord] = useState("");

  useEffect(() => {
    if (humidity < 20) {
      setHumidWord("건조할");
    } else if (humidity < 60) {
      setHumidWord("일반적일");
    } else {
      setHumidWord("꽤나 습할");
    }

    switch (main) {
      case "Rain":
        setWeatherImg(rainny);
        break;
      case "Clouds":
        setWeatherImg(cloudy);
        break;
      case "Snow":
        setWeatherImg(snowy);
      case "Sun":
        setWeatherImg(sunny);
      default:
        throw Error("날씨 정보가 올바르지 않습니다.");
    }
  }, [humidity]);

  return (
    <div className={styles.modalWrapperShow}>
      <h1 className={styles.title}>{city}</h1>
      <div className={styles.imgWrapper}>
        <img className={styles.weatherImg} src={weatherImg} alt="" />
      </div>
      <div className={styles.weatherInfo}>
        <p>
          {city}의 오늘 기온은 <span>{tempFormatter(temp)}도</span>이며, <br />
          체감온도는 <span>{tempFormatter(feels_like)}도</span> 입니다. <br />
          최저 기온괴 최고 기온은 각각
          <span>
            {tempFormatter(temp_min)}도, {tempFormatter(temp_max)}도
          </span>
          일 것이며 <br />
          습도는 <span>{humidity}%</span>로 {humidWord} 예정입니다.
        </p>
      </div>
      <button className={styles.closeBtn} onClick={handleOffModal}>
        CLOSE
      </button>
    </div>
  );
};

export default Modal;
