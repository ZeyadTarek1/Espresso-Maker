import React from "react";

const Delivery = (params) => {
    return (
        <div className="delivery">
            <label htmlFor="deliveryTime">
                When would you like your coffee?{" "}
            </label>
            <input
                type="datetime-local"
                id="deliveryTime"
                name="deliveryTime"
            />
        </div>
    );
};
export default Delivery;
