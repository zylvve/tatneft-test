import { LineChart } from "@mui/x-charts"
import { formatDate, generateAscendingDates } from "../../utils/formatDate";
import { averageByChunks } from "../../utils/averages";
import type { WeatherChartProps } from "./WeatherChart";

type WeatherDailyChartProps = Omit<WeatherChartProps, 'hours'> & { days: number };

function WeatherDailyChart({name, days, temperatures, height}: WeatherDailyChartProps) {
    const tempSlice = temperatures.slice(-days * 24)
    const dailyTemperatures = averageByChunks(tempSlice, 24) 
    const xLabels = generateAscendingDates(days);

    return (
        <div>
            <h2>{name}</h2>
            <LineChart
                xAxis={[{ 
                    scaleType: "time",
                    data: xLabels.map(label => new Date(label)),
                    disableTicks: true,
                    valueFormatter: (date) => formatDate(date), 
                }]}
                series={[{ data: dailyTemperatures }]}
                height={height}
            />
        </div>
    )
}

export default WeatherDailyChart