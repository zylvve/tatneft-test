import { LineChart } from "@mui/x-charts"

type WeatherChartProps = {
    name: string,
    labels: string[],
    temperatures: number[],
    height: number,
}

function WeatherChart({name, temperatures, labels, height}: WeatherChartProps) {
    const currentHour = (new Date()).getUTCHours();
    const tempSlice = currentHour < 23 ? temperatures.slice(currentHour - 47, currentHour - 23) : temperatures.slice(-24); 
    const xLabels = currentHour < 23 ? labels.slice(currentHour - 47, currentHour - 23) : labels.slice(-24);
    
    function formatXAxisDate(date: Date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function formatTooltipDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    return (
        <div>
            <h2>{name}</h2>
            <LineChart
                xAxis={[{ 
                    scaleType: "time",
                    data: xLabels.map(label => new Date(label + 'Z')), // Z для обозначение, что время в UTC
                    disableTicks: true,
                    valueFormatter: (date, context) => context.location === 'tick' ? formatXAxisDate(date) : formatTooltipDate(date), 
                }]}
                series={[{ data: tempSlice }]}
                height={height}
            />
        </div>
    )
}

export default WeatherChart