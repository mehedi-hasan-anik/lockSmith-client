import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './ReviewArea.css';

const ReviewArea = () => {
    const[user,setUser]=useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
   
    const onSubmit = data => {
        const review = {
            userName:user.name,
            userEmail:user.email,
            name:data.name,
            company:data.company,
            description:data.description,
        }
       
        fetch('https://cryptic-spire-90197.herokuapp.com/addReview',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>console.log("server side response",res))

        console.log('result',review);
    }
       
    
    return (
        <div className="add-area">
        <div className="container">
        <div className="inner-form-area">
             <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="review-input">
                      <input name="name" defaultValue="" ref={register} placeholder="Your Name" />
                   </div>

                   <div className="review-input">
                         <input name="company" defaultValue="" ref={register} placeholder="Adrress" />
                   </div>
                   
                   <div className="review-input ">
                      <textarea name="description" id="" cols="30" rows="5" defaultValue="" ref={register}  placeholder="description"></textarea>
                   </div>
                    <div className="review-input">
                       <input type="submit" />
                    </div>
                   
             </form>
        </div>
        </div>
    </div>
    );
};

export default ReviewArea;