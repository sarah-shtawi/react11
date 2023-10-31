import React, { useEffect, useState } from 'react'

export default function() {
    let [salad, setSalad] = useState([]);

    const getSalad = async()=> {
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data = await reponse.json();
        setSalad(data.recipes);
      }
      useEffect( ()=> {
        getSalad();
      }, []);
  return (
    <>
     <div className='row'>
        {
          salad.map((ele)=>{
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
