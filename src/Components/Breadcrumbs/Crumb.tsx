import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

interface CrumbData {
  title: string;
}


export const Crumb:React.FC = () => {  
  const [data, setData] = useState<CrumbData | null>(null);
  const { id } = useParams<{ id: string }>();

  const location = useLocation()

    useEffect(() => {
      fetch(
        `https://64e6020b09e64530d17f6dd0.mockapi.io/Flavors/${id}`
      )
      .then((res) => res.json())
      .then((data: CrumbData) => {
        setData(data);
      });

    }, [id]);


    if (location.state?.state && data) {
      location.state = { state: data.title };
    }
  

    return (
      <>
        <Link to={"/Perfume"}>Главная / </Link>
        <span style={{ color: '#7A7364' }}>{location.state ?? data?.title}</span>
      </>
    );
  
}
