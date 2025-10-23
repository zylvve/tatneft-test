import { useQuery } from '@tanstack/react-query';
import styles from './ChartsContainer.module.css';
import { getWeatherData } from '../../services/weatherService';
import { useState } from 'react';
import WeatherChart from '../WeatherChart/WeatherChart';
import HoursSlider from '../HoursSlider/HoursSlider';

type Location = {
    name: string,
    latitude: number,
    longitude: number,
}

type ChartsContainerProps = {
    locations: Location[]
}

function ChartsContainer({locations}: ChartsContainerProps) {
    const [hours, setHours] = useState<number>(24);

    const { isPending, error, data } = useQuery({
        queryKey: ['weather-data'],
        queryFn: getWeatherData,
    })
    
    if (isPending) return 'Loading'
    if (error) return error.message;

    return (
        <section className={styles.charts_container}>
            {locations.map((location, index) => <WeatherChart 
                key={`weather_chart_${location.name}`}
                name={location.name}
                hours={hours}
                labels={data[index].hourly.time}
                temperatures={data[index].hourly.temperature_2m}
                height={300}
            />)}
            <HoursSlider
                value={hours}
                setValue={setHours}
            />
        </section>
    )
}

export default ChartsContainer
