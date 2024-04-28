const Api_Key='eaf96943ec140ea0b27198f0d2301157'
const makeIconURL=(iconID)=> `https://openweathermap.org/img/wn/${iconID}@2x.png`
const getWeatherData = async (city,units="metric")=>{

    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=${units}`
    const data= await fetch(URL)
        .then((res)=>res.json())
        .then((data)=>data);
        const{
            weather,
            main:{
                temp,feels_like,temp_min,temp_max,pressure,humidity
                    },
            wind:{
                speed
            },
            sys:{
                country
            },
            name}=data;
            const {description,icon}=weather[0]

            return{
                description,
                iconURL: makeIconURL(icon),
                temp,
                name,
                feels_like,
                pressure,
                temp_max,
                temp_min ,
                speed,
                country,
                humidity
            }
}
export {getWeatherData}