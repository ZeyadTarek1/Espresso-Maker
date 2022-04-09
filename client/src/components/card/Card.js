import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({ name, minAmount, maxAmount, img, setCustomCoffee }) => {
    const [amount, setAmount] = useState(1);

    const addAmount = () => (amount >= maxAmount ? "" : setAmount(amount + 1)); // check max amount
    const removeAmount = () =>
        amount <= minAmount ? "" : setAmount(amount - 1); //check min amount

    useEffect(() => {
        setCustomCoffee((customCoffee) => ({
            ...customCoffee,
            [name]: amount,
        })); //new custom coffee = old ingredients + new changed ingredient
    }, [amount]);

    return (
        <div className="card">
            <img src={img} alt="Espresso" />
            <div className="container">
                <h4>
                    <b>{name}</b>
                </h4>
                <p>Amount : {amount} </p>
                <button className="carBtn" onClick={removeAmount}>
                    Remove
                </button>
                <button className="carBtn" onClick={addAmount}>
                    Add
                </button>
            </div>
        </div>
    );
};
export default Card;
