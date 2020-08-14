import React, { useState } from 'react';

const Contact = () =>{
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My email is ${data.email}. My mobile number is ${data.phone}. Here is what I want ${data.msg}`)
    };

return (
    <>
    <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 mb-5 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="form-control" id="" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email address</label>
                        <input type="email" className="form-control" id="" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" className="form-control" id="" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Message</label>
                        <textarea className="form-control" id="" rows="3" name="msg" value={data.msg} onChange={inputEvent} placeholder="Write message here"></textarea>
                    </div>
                    <button className="btn btn-info" type="submit">Send Message</button>
                    </form>
            </div>
        </div>
    </div>
    </>
);
};

export default Contact;