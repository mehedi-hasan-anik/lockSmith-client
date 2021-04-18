import React from 'react';
import HeaderPhoto from '../image/5c255d41fc7cf04d49ca8aded4487520.jfif';

const HeaderBottom = () => {
    return (
        <div className="container">
            <div className=" row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                     <h1 className="text-primary mb-5">Hello and Welcome</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                     <button className="btn btn-primary">Get Service</button>
                </div>
                <div className="col-md-6">
                    <img src={HeaderPhoto} alt="" className="img-fluid"/>
                </div>
                
            </div>
        </div>
    );
};

export default HeaderBottom;