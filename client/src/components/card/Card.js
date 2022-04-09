import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({
    name,
    minAmount,
    maxAmount,
    img,
    setCustomCoffee,
    customCoffee,
}) => {
    const addAmount = () =>
        customCoffee[name] >= maxAmount
            ? ""
            : setCustomCoffee({
                  ...customCoffee,
                  [name]: customCoffee[name] + 1,
              }); // check max amount
    const removeAmount = () =>
        customCoffee[name] <= minAmount
            ? ""
            : setCustomCoffee({
                  ...customCoffee,
                  [name]: customCoffee[name] - 1,
              }); //check min amount

    return (
        <div className="card">
            <img src={img} alt="Espresso" />
            <div className="container">
                <h4>
                    <b>{name}</b>
                </h4>
                <p>Amount : {customCoffee[name]} </p>
                <button className="carBtn" onClick={addAmount}>
                    Add
                </button>
                <button className="carBtn" onClick={removeAmount}>
                    Remove
                </button>
            </div>
        </div>
    );
};
export default Card;
