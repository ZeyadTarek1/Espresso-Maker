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

    const [caffieneHistory, setCaffieneHistory] = useState(0);
    const [customCoffee, setCustomCoffee] = useState(coffee);

    async function sendData(submitData) {
        let tempCaffiene = caffieneHistory;
        const result = await fetch("http://localhost:5000/postdata", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(submitData),
        });
        tempCaffiene = tempCaffiene + customCoffee.Espresso;
        setCaffieneHistory(tempCaffiene);
        console.log(result);
        if (result.status === 200) {
            console.log("Post complete");
        }
    }

    return (
        <div className="App">
            <h1>Espresso Order and Delivery</h1>
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
            <Delivery
                date={coffee.date}
                setCustomCoffee={setCustomCoffee}
                customCoffee={customCoffee}
            />
            <button className="appBtn" onClick={() => sendData(customCoffee)}>
                Submit
            </button>
            {/* do a post and save data */}
            <p className="caffieneHistory">
                caffiene history: {caffieneHistory}
            </p>
        </div>
    );
}

export default App;
