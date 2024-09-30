import React,{useRef,useEffect, useState} from 'react'
import "./TitleCard.css"
import cards from "../../../assets/cards/Cards_data"
import {Link} from "react-router-dom"

function TitleCar({title,category}) {
  const [apiData,setApiData]=useState([])
  console.log("apiData",apiData)
    const cardRef = useRef();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmZkMmU4ODk1OGQ4NjQ2YzE4NzJmMThkYWE5N2MwOCIsIm5iZiI6MTcyNDU5MDIxMS4wNzI4NTIsInN1YiI6IjY2Y2IwZjU4ZTJiZmZjNzc2OGQzZWQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHswIxbu_CiHLPpVsmUcs7MPq7nyC56c99jeGpBjUj8'
      }
    };
    

    const handleWheel = (e) => {
      e.preventDefault();
      cardRef.current.scrollLeft += e.deltaY;
    };
  
    useEffect(() => {
      const currentRef = cardRef.current;
      if (currentRef) {
        
    fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
        currentRef.addEventListener('wheel', handleWheel);
      }
      return () => {
        if (currentRef) {
          currentRef.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);
  
  return (
   
    <div className='titlecards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardRef} >
            {apiData.map((card,index)=>{
          
               return <Link  to={`/player/${card.id}`} className="card" key={index} onClick={()=>console.log("clicked")}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_titl}</p>
               </Link>
            })}
        </div>
      
    </div>
  )
}

export default TitleCar
