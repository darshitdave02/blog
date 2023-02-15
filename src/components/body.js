import React from "react";
import Card from "./card";
import data from './../mockData/index.json'


export default function Body() {
    return (
        <div className="content main">
            {data.map((item) => (

                <Card item={item}/>
            ))}


        </div>
    )
}