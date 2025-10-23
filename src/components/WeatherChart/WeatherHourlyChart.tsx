import { LineChart } from "@mui/x-charts"
import { formatFullDate, formatTime } from "../../utils/formatDate";
import type { WeatherChartProps } from "./WeatherChart";
import styles from "./WeatherChart.module.css";

type WeatherHourlyChartProps = WeatherChartProps;

function WeatherHourlyChart({name, hours, temperatures, labels, height}: WeatherHourlyChartProps) {
    const currentHour = (new Date()).getUTCHours();
    const hourlyTemperaturesSlice = currentHour < 23 ? temperatures.slice(currentHour - 23 - hours, currentHour - 23) : temperatures.slice(-hours); 
    const xLabels = currentHour < 23 ? labels.slice(currentHour - 23 - hours, currentHour - 23) : labels.slice(-hours);
    
    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <LineChart
                xAxis={[{ 
                    scaleType: "time",
                    data: xLabels.map(label => new Date(label + 'Z')), // Z для обозначение, что время в UTC
                    disableTicks: true,
                    valueFormatter: (date, context) => context.location === 'tick' ? formatTime(date) : formatFullDate(date), 
                }]}
                series={[{ data: hourlyTemperaturesSlice }]}
                height={height}
            />
        </div>
    )
}

export default WeatherHourlyChart