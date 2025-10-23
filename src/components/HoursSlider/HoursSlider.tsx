import { Slider } from "@mui/material";

type HoursSliderProps = {
    value: number;
    setValue: (value: number) => void;
}

function HoursSlider({ value, setValue }: HoursSliderProps) {
    const handleChange = (_event: Event, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>{value <= 24 ? `Часов: ${value}` : `Дней: ${Math.ceil(value / 24)}`}</div>
            <Slider
                value={value}
                min={6}
                step={1}
                max={24 * 7}
                //scale={calculateValue}
                onChange={handleChange}
                valueLabelDisplay="off"
            />
        </div>
  );
}

export default HoursSlider