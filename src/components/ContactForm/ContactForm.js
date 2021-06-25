import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact  py-5 ">
        <div className="container">
            <div className="section-header text-center  mb-5">
                 <h5 className="text-white">Contact</h5>
                 <h2>Let us handle your <br/> project , professionally</h2>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="https://formcarry.com/s/JPbGpbi0qPn" method="POST" accept-charset="UTF-8">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Full Name" name="name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Enter Your Phone Number" name="number"/>
                    </div>
                    <div className="form-group">
                        <textarea  className="form-control" id="" cols="30" rows="10" placeholder="Message *" name="descriptaion"></textarea>
                    </div>
                    <div className="form-group text-center">
                        {/* <button type="button" className="btn btn-primary"> Submit </button> */}
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ContactForm;