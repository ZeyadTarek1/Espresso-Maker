import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card.js";
import Delivery from "./components/delivery/Delivery.js";
import imgEspresso from "./img/espresso.svg";
import imgMilk from "./img/milk.svg";
import imgWater from "./img/water.svg";
import imgSugar from "./img/sugar.svg";

function App() {
    const ingredients = [
        {
            id: "0",
            name: "Espresso",
            minAmount: 1,
            maxAmount: 5,
            img: imgEspresso,
        },
        {
            id: "1",
            name: "Milk",
            minAmount: 0,
            maxAmount: 4,
            img: imgMilk,
        },
        {
            id: "2",
            name: "Water",
            minAmount: 0,
            maxAmount: 3,
            img: imgWater,
        },
        {
            id: "3",
            name: "Sugar",
            minAmount: 0,
            maxAmount: 2,
            img: imgSugar,
        },
    ];

    const coffee = {
        Espresso: 0,
        Milk: 0,
        Water: 0,
        Sugar: 0,
        date: null,
    };

    const [customCoffee, setCustomCoffee] = useState(coffee);

    return (
        <div className="App">
            <h1>hello</h1>
            {ingredients.map((data) => (
                <Card
                    key={data.id}
                    name={data.name}
                    minAmount={data.minAmount}
                    maxAmount={data.maxAmount}
                    img={data.img}
                    setCustomCoffee={setCustomCoffee}
                />
            ))}
            <Delivery />
            <button>Submit</button>
        </div>
    );
}

export default App;
