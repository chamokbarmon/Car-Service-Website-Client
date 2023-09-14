import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ALlShowCar from '../AllShowCar/ALlShowCar';


const ShowCars = () => {
    const [cars,Setcars] = useState([])
    console.log(cars)
    
    useEffect(()=>{
        fetch(`https://used-product-market-server.vercel.app/Carsoptions`)
        .then(res=>res.json())
        .then(data=>Setcars(data))
    },[cars]) 
    return (
        <div>
        <div 
         style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: "10px",
            // backgroundImage:
            //   "url(https://i.ibb.co/h9WGDK7/layered-waves-haikei-3.png)",
            backgroundColor:"#8b8f97"
          }}
        >
            <h1 className='text-4xl text-center font-bold mt-8 italic'> Car Service.. </h1>

            <div className='grid gap-3 mt-8 mx-6 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cars.map(car=><ALlShowCar key={car._id} car={car}></ALlShowCar> )
             }  
            </div>
           
        </div>


        
        </div>

    );
};

export default ShowCars;

