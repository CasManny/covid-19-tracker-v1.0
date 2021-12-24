import React, { useEffect, useState } from "react";
import { Cards, DataChart, CountryPicker } from "./components";
import styles from "./App.module.css";
import axios from "axios";
import coronaImage from './Assets/image.png'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const App = () => {

  const [fetchedData, setFetchedData] = useState([]);
  const [country, setCountry] = useState('')

  const url = "https://covid19.mathdro.id/api";

  const fetchUniversalData = async () => {
    const { data } = await axios.get(url);
    setFetchedData(data);
  };

  const handleCountryChange = async (country) => {
    if(country === 'Global') {
      setCountry('')
      const { data } = await axios.get(url);
      setFetchedData(data);

    } else {

      setCountry(country);
      const { data } = await axios.get(`${url}/countries/${country}`);
      setFetchedData(data);
    }
  };

  useEffect(() => {
    fetchUniversalData();
  }, []);


  if (fetchedData.length === 0) {
    return (
      <div className={styles.loader}>

        <CircularProgress size={50} />
      </div>
    );
  }



  return (
    <div className={styles.container}>
      <img src={coronaImage} alt="coronavirus" />
      <Cards data={fetchedData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <DataChart
        data={fetchedData}
        country={country}
      />
    </div>
  );
};

export default App;
