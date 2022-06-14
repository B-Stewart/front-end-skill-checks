import { useEffect, useState } from "react";
import styles from "./thermometer.module.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const cities = [
  "London",
  "Los Angeles",
  "Ottawa",
  "Berlin",
  "Delhi",
  "Tokyo",
  "Istanbul",
  "New York",
  "Mexico City",
  "Shanghai",
  "Beijing",
  "Buenos Aires",
  "Geneva",
  "Kathmandu",
];

const LoadingIcon = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
  >
    <CircularProgress />
  </Box>
);

// https://weatherdbi.herokuapp.com/documentation/v1

export const ThermometerProject = () => {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [cityData, setCityData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    const res = await fetch(
      `https://weatherdbi.herokuapp.com/data/weather/${encodeURIComponent(
        city.toLowerCase(),
      )}`,
    );

    const data = await res.json();

    setCityData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(activeCity);
  }, [activeCity]);

  console.log(cityData);

  if (!cityData) {
    return <LoadingIcon />;
  }

  const temp = cityData.currentConditions.temp.f;
  const tempMath = (temp / 136) * 100;
  const tempPercent = tempMath <= 0 ? 0 : tempMath;

  return (
    <div className="container">
      <h1 className="textCenter">Thermometer</h1>
      <div className={styles.cities}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap={"wrap"}
          sx={{ pb: 2 }}
        >
          {cities.map((city) => (
            <Chip
              key={city}
              label={city}
              style={{ marginBottom: 8 }}
              variant={city == activeCity ? "filled" : "outlined"}
              onClick={() => setActiveCity(city)}
            />
          ))}
        </Stack>
      </div>

      <div className="textCenter">
        {activeCity}{" "}
        <b>{loading ? "--" : cityData.currentConditions.temp.f}°F</b>
      </div>
      <div className={styles.thermometer}>
        {loading ? null : (
          <span
            className={styles.bar}
            style={{ left: `${(temp / 120) * 100}%` }}
          />
        )}
      </div>
      <Box sx={{ mt: 2 }}>{loading ? <LoadingIcon /> : null}</Box>
    </div>
  );
};
