import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow from "../../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const [apiData,setApiData]=useState({name:"",key:"",published_at:"",typeof:""})
  const {id}=useParams()
  const navigate=useNavigate()
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmZkMmU4ODk1OGQ4NjQ2YzE4NzJmMThkYWE5N2MwOCIsIm5iZiI6MTcyNDU5MDIxMS4wNzI4NTIsInN1YiI6IjY2Y2IwZjU4ZTJiZmZjNzc2OGQzZWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHswIxbu_CiHLPpVsmUcs7MPq7nyC56c99jeGpBjUj8'
    }
  };
  
   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

   },[])
  return (
    <div className='player'>
        <img src={back_arrow} onClick={()=>navigate(-2)}  />
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.name}</p>
            <p>{apiData.published_at}</p>
            <p>{apiData.type}</p>
        </div>
      
    </div>
  )
}

export default Player
