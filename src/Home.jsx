import React from 'react';
import web from "../src/images/web-design-01.jpg";
import Common from './Common';


const Home = () =>{
return (
    <>
    <Common name="Grow Your Business With" imgsrc={web} visit='/service' btnname="Get Started"/>
    </>
);
};

export default Home;