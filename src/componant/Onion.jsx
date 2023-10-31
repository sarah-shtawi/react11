import React, { useEffect, useState } from 'react'

export default function Onion() {
    let [onion, setOnion] = useState([]);

    const getOnion = async()=> {
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data = await reponse.json();
        setOnion(data.recipes);
      }

      useEffect( ()=> {
        getOnion();
      }, []);
   
  return (
    <>
     <div className='row'>
        {
          onion.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
              <h2>{ele.title}</h2>
              <img src={ele.image_url} className='img-fluid w-50' />
            </div>
          })
        }
      </div>
    </>
  )
}

