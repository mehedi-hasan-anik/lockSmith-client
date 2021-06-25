import React from 'react';
import sell from '../image/5-things-a-residential-locksmith-can-do-for-you-2.jpg';
import repair from '../image/Locksmith_scams.webp';
import keys from '../image/locksmithing-2.jpg';

const Slider = () => {
    return (
        <div className="container p-5">
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