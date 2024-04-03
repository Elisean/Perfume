import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';




export const Crumb:React.FC = () => {  
  const [data, setData] = useState<any>([]);
  const {id} = useParams();
  const location = useLocation()

    
    useEffect(() => {
      fetch(
        `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors/${id}`
      )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
     
       });  
    }, [id]);


    if(location.state === null){
      location.state = data.title;
    }

  return (
    <>
          <Link to={"/Perfume"}>Главная / </Link>
          <span style={{color:'#7A7364'}}>{location?.state ?? data.title}</span>   
    </>
   
  )
}
