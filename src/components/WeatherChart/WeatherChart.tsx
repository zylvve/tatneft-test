import WeatherDailyChart from "./WeatherDailyChart"
import WeatherHourlyChart from "./WeatherHourlyChart"

export type WeatherChartProps = {
    name: string,
    hours: number,
    labels: string[],
    temperatures: number[],
    height: number,
}

function WeatherChart(props: WeatherChartProps) {
    if (props.hours > 24) 
        return <WeatherDailyChart {...props} days={Math.ceil(props.hours / 24)}/> 
    else
        return <WeatherHourlyChart {...props}/> 
}

export default WeatherChart