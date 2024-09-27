import React, { useEffect, useRef, useState } from "react";
import styles from "./WeatherContainer.module.css";
import Modal from "./Modal";
import axios from "axios";

const API_KEY = "6fedcc97e7db79afdaa9f48ec681939f";
const CITIES = ["busan", "london", "incheon", "tokyo", "chungju"];

const WeatherContainer = () => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("london");
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  useEffect(() => {
    try {
      setLoading(true);
      const getWeatherAPI = async () => {
        const response = await axios.get(URL);
        const result = response.data;
        setWeatherData(result);
      };
      getWeatherAPI();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [city]);

  const handleOnModal = () => {
    setCity(inputRef.current.value.toUpperCase());
    setModal(true);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Input City !</h2>
      <div className={styles.inputForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="City Name.."
          ref={inputRef}
        />
        <button className={styles.searchButton} onClick={handleOnModal}>
          SEARCH
        </button>
      </div>
      {/* Modal 만들기 */}
      {modal ? (
        weatherData ? (
          <Modal
            modal={modal}
            setModal={setModal}
            weatherData={weatherData}
            city={city}
          />
        ) : null
      ) : null}
    </div>
  );
};

export default WeatherContainer;
