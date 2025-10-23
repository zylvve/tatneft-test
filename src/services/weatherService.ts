import type { WeatherData } from "../types/WeatherData";

export async function getWeatherData(): Promise<WeatherData[]> {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=52.37,40.76,35.68&longitude=4.92,-73.98,139.77&hourly=temperature_2m&start_date=2025-10-16&end_date=2025-10-23'
    )
    return await response.json();
}
