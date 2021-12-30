import React from 'react';
import {Col, Row } from 'react-bootstrap';
import {LineChart,Line,YAxis,XAxis, CartesianGrid} from 'recharts';




function ChartsSection(){

    var data=[{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 600, pv: 1400, amt: 3400},];

    return(
        <>
         <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
        </>
    );}

export default ChartsSection;