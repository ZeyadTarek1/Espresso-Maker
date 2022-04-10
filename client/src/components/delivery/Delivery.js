import React from "react";
import "./delivery.css";

const Delivery = ({ date, customCoffee, setCustomCoffee }) => {
    const getValue = (e) => {
        const dataValue = e.target.value;
        setCustomCoffee({ ...customCoffee, date: dataValue });
    };
    return (
        <div className="delivery">
            <label htmlFor="deliveryTime">
                <p className="deliveryText">
                    When would you like your coffee?{" "}
                </p>
            </label>
            <input
                className="input"
                type="datetime-local"
                id="deliveryTime"
                name="deliveryTime"
                defaultValue={customCoffee.date}
                onChange={getValue} //call this function when this input changes
                // send the new date to app (using state)
            />
        </div>
    );
};
export default Delivery;
