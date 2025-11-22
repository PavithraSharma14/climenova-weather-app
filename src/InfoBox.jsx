import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HOT_IMAGE from "./assets/HOT_IMAGE.jpg";
import COLD_IMAGE from "./assets/COLD_IMAGE.jpg";
import RAINY_IMAGE from "./assets/RAINY_IMAGE.jpg";



export default function InfoBox({info}) {
    return (
        <div className="InfoBox">
            <div className='card-container'>
            <Card sx={{ maxWidth: 350,maxHeight: 440,borderRadius: "1rem"}}>
               <CardMedia
                 sx={{ height: 150 }}
                 image= {info.humidity > 80 ? RAINY_IMAGE : info.temp > 15 ? HOT_IMAGE  : COLD_IMAGE}
                 title="weather"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                {info.humidity > 80 ? <CloudySnowingIcon/> : info.temp > 15 ? <SunnyIcon sx={{ color: '#FF5733' }} />  : <AcUnitIcon/> }
                 </Typography>
                <Typography variant="body3" sx={{ color: 'text.primary',fontSize:"1rem"}}component={"span"}>
                    <p><DeviceThermostatOutlinedIcon/>Temperature : {info.temp}&deg;C</p>
                    <p><WaterDropIcon sx={{color: "blue"}}/>Humidity : {info.humidity}</p>
                    <p>Min Temp : {info.minTemp}&deg;C</p>
                    <p>Max Temp : {info.maxTemp}&deg;C</p>
                    <p><i>{info.city}</i> is {info.temp}&deg;C right now with <i>{info.weather}</i>. It feels like {info.feelsLike}&deg;C</p>
                    </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}