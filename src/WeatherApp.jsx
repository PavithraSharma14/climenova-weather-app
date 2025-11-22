import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Bengaluru",
        feelsLike: 22.22,
        humidity: 88,
        minTemp: 20.83,
        maxTemp: 21.7,
        temp:  28.23,
        weather: "broken clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
          <h1>ClimeNova</h1>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    )

}