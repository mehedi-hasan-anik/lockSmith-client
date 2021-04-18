import React from 'react';
import sell from '../image/5c255d41fc7cf04d49ca8aded4487520.jfif';
import repair from '../image/handyman-repair-door-lock-workers-260nw-1164157879.webp';
import keys from '../image/unnamed.jpg';

const Slider = () => {
    return (
        <div className="container mt-5">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={sell} style={{maxHeight:'600px',height:'100%'}} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={repair} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={keys} class="d-block w-100" alt="..."/>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Slider;