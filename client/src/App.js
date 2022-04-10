import React, { useEffect, useState } from "react";
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
        Espresso: 1,
        Milk: 1,
        Water: 1,
        Sugar: 1,
        date: null,
    };

    const [caffieneHistory, setCaffieneHistory] = useState(0);
    const [customCoffee, setCustomCoffee] = useState(coffee);
    let sendFlag = false;

    async function sendData(submitData) {
        if (sendFlag) return;
        sendFlag = true;
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
        setCustomCoffee({ ...coffee }); //reset coffee
        if (result.status === 200) {
            console.log("Post complete");
            getData();
        }
        sendFlag = false;
    }

    async function getData() {
        const result = await fetch("http://localhost:5000/getdata"); //fetch data
        let dataJson = await result.json();
        setCaffieneHistory(dataJson.sum); //set state to be marked
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <p className="titleText">Espresso Order and Delivery</p>
            {ingredients.map((data) => (
                <Card
                    key={data.id}
                    name={data.name}
                    minAmount={data.minAmount}
                    maxAmount={data.maxAmount}
                    img={data.img}
                    customCoffee={customCoffee}
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
                caffiene history: {caffieneHistory} espresso shots
            </p>
        </div>
    );
}

export default App;
