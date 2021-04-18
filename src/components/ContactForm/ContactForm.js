import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact my-5 py-5 container">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h5 className="text-white">Contact</h5>
                 <h2>Let us handle your <br/> project , professionally</h2>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Full Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Enter Your Phone Number"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ContactForm;