import { locations } from "../locations";
import type { WeatherData } from "../types/WeatherData";
import { formatDate } from "../utils/formatDate";

export async function getWeatherData(): Promise<WeatherData[]> {
    const latitudes = locations.map(location => location.latitude).join();
    const longitudes = locations.map(location => location.longitude).join();

    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 7);

    const endDateFormatted = formatDate(endDate);
    const startDateFormatted = formatDate(startDate);

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&hourly=temperature_2m&start_date=${startDateFormatted}&end_date=${endDateFormatted}`
    )
    return await response.json();
}
