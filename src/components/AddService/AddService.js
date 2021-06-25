import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';
import { userContext } from '../../App';

const AddService = () => {
    const[user,setUser]=useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL]=useState(null)

    const onSubmit = data => {
        const eventData = {
            email:user.email,
            title:data.title,
            price:data.price,
            imageURL:imageURL,
            description:data.description,
        }
       
       
        fetch('https://cryptic-spire-90197.herokuapp.com/addEvent',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>console.log("server side response",res))

        console.log('result',eventData);
    }

    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','2bda71818c9001c9cae7ef2a0ecc9c5a');
        imageData.append('image',event.target.files[0]);
        

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
              console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="add-area">
         <div className="container">
        <div className="inner-form">
             <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="inner-form-input">
                       <input name="title" defaultValue="" ref={register} placeholder="title" />
                   </div>

                   <div className="inner-form-input">
                       <input  name="price" defaultValue="" ref={register} placeholder="Price" />
                   </div>

                   <div className="inner-form-input">
                       <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                   </div>
                  
                    {/* <input  name="description" defaultValue="" ref={register}  placeholder="Author Name" /> */}
                   
                   <div className="inner-form-input">
                       <textarea name="description" id="" cols="30" rows="5" defaultValue="" ref={register}  placeholder="description"></textarea>
                   </div>

                  <div className="inner-form-input">
                       <input type="submit" />
                  </div>
             </form>
        </div>
        </div>
    </div>
    );
};

export default AddService;