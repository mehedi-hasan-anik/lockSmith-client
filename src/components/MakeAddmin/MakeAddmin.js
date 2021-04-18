import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const MakeAddmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        const addData = {
            email:data.email,
        }
        fetch('http://localhost:8080/addEmail',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(addData)
        })
        .then(res=>console.log("server side response",res))

        console.log('result',addData);
    }
    return (
        <div className="container">
           <div style={{margin:'0 auto',width:'100%',maxWidth:'300px'}}>
                <form onSubmit={handleSubmit(onSubmit)} >
                        <input name="email" defaultValue="" ref={register} placeholder="email" />
                        <input type="submit" />
                </form>
           </div>
        </div>
    );
};

export default MakeAddmin;