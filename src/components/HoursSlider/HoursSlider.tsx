import { Slider } from "@mui/material";
import styles from './HoursSlider.module.css'

type HoursSliderProps = {
    value: number;
    setValue: (value: number) => void;
}

function HoursSlider({ value, setValue }: HoursSliderProps) {
    const handleChange = (_event: Event, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.hours_slider}>
            <b>{value <= 24 ? `Часов: ${value}` : `Дней: ${Math.ceil(value / 24)}`}</b>
            <Slider
                value={value}
                min={6}
                step={1}
                max={24 * 7}
                onChange={handleChange}
                valueLabelDisplay="off"
            />
        </div>
  );
}

export default HoursSlider