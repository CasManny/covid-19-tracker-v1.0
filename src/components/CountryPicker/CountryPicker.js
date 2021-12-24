import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { NativeSelect } from "@mui/material";
import styles from "./CountryPicker.module.css";
import axios from "axios";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  const url = "https://covid19.mathdro.id/api";

  const fetchCountries = async () => {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    setFetchedCountries(countries.map((country) => country.name));
  };

  useEffect(() => {
    fetchCountries();
  }, []);


  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="Global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
