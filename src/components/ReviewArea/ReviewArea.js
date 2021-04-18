import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';

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
        <div className="inner-form">
             <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="" ref={register} placeholder="Your Name" />
                    <input name="company" defaultValue="" ref={register} placeholder="Company name" />
                    <br/>
                     <textarea name="description" id="" cols="30" rows="5" defaultValue="" ref={register}  placeholder="description"></textarea>
                    <br/>
                    <input type="submit" />
             </form>
        </div>
    </div>
    );
};

export default ReviewArea;