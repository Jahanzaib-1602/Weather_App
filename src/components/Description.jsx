import React from 'react'
import {AiOutlineArrowDown,AiOutlineArrowUp} from 'react-icons/ai'
import {BiHappy} from 'react-icons/bi'
import {FaWind} from 'react-icons/fa'
import {MdCompress} from 'react-icons/md'
import {MdOutlineWaterDrop} from 'react-icons/md'
import {WiDegrees} from 'react-icons/wi'

import './Description.css'
const Description = ({weather,unit}) => {
    const tempUnit= unit==='metric' ? '°C' :'°F'
    const windUnit= unit==='metric' ? 'm/s' :'m/h'

    const cards=[
        {
            id:1,
            title:'min',
            data:weather.temp_min.toFixed(),
            unit:tempUnit,
            icon:<AiOutlineArrowDown/>
        },
        {
            id:2,
            title:'max',
            data:weather.temp_max.toFixed(),
            unit:tempUnit,
            icon:<AiOutlineArrowUp/>
        },
        {
            id:3,
            title:'feels like',
            data:weather.feels_like.toFixed(),
            unit:tempUnit,
            icon:<BiHappy/>
        },
        {
            id:4,
            title:'pressure',
            data:weather.pressure,
            unit:'hPa',
            icon:<MdCompress/>
        },
        {
            id:5,
            title:'humidity',
            data:weather.humidity,
            unit:'%',
            icon:<MdOutlineWaterDrop/>
        },
        {
            id:6,
            title:'wind speed',
            data:weather.speed.toFixed(),
            unit:windUnit,
            icon:<FaWind/>
        },
    ]
  return (
    <div className="section section_description">
    {
        cards.map(({id,unit,data,icon,title})=>(
            <div key={id} className="card">
            <div className="description_card-icon">
            {icon}
            <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
        </div>
        ))
    }
    </div>
  )
}

export default Description
