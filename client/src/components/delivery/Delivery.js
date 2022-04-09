import React from "react";
import "./delivery.css";

const Delivery = (date, customCoffee, setCustomCoffee) => {
    return (
        <div className="delivery">
            <label htmlFor="deliveryTime">
                <p className="deliveryText">
                    When would you like your coffee?{" "}
                </p>
            </label>
            <input
                type="datetime-local"
                id="deliveryTime"
                name="deliveryTime"
                defaultValue={date}
                onChange={() => {
                    console.log("test");
                    // console.log(defaultValue);
                    // setCustomCoffee(() => ({
                    //     ...customCoffee,
                    //     [date]: "test",
                    // }));
                }} //call this function when this input changes
                // send the new date to app (using state)
            />
        </div>
    );
};
export default Delivery;
