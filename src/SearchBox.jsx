import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = apiKey;

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod === "404") {
                 throw new Error("City not found");
            }
            let result = {
            city: city,
            temp: jsonResponse.main.temp,
            minTemp:jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        return result;
        }catch(err) {
            throw err;
        }
    }

    let handleInputChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setError(false);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className='searchBox'>
        <form onSubmit={handleSubmit}>
           <TextField id="outlined-basic" label="Find City" variant="outlined" onChange={handleInputChange} value={city} required /> <br /><br />
           <Button variant="contained" type='submit'><b>Get Weather</b></Button>
           {error && <p className="error-text">Invalid city name!</p>}
        </form>
        </div>
    )
}