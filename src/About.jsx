import React from 'react';
import web from "../src/images/Rabbi-hosain.jpg";
import Common from './Common';

const About = () =>{
return (
    <>
    <Common name="Welcome to our About page" imgsrc={web} visit='/contact' btnname="Contact Now"/>
    </>
);
};

export default About;