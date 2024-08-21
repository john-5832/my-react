import React, { useState } from "react";

const MyComponent = () => {
    const stateCityData = {
        Tamilnadu: ['coimbatore', 'madurai'],
        Kerala: ['palakad', 'cochin'],
        Karnataka: ['bangalore', 'simoga']
    };

    const [state, setState] = useState('');
    const [city, setCity] = useState([]);

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);
        setCity(stateCityData[selectedState]);
    };

    return (
        <div>
            <label>Dropdown</label>
            <label>
                State:
                <select onChange={handleStateChange}>
                    <option value="">..select state..</option>
                    {Object.keys(stateCityData).map((state) => (
                        <option value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Cities:
                <select>
                    <option value="">..select city..</option>
                    {city.map((city) => (
                        <option value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default MyComponent;
