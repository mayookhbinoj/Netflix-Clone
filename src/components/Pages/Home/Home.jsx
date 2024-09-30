import React from 'react'
import "./Home.css";
import  Navbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import Title from "../../Pages/Titlecard/TitleCar"
import hero from "../../../assets/hero_banner.jpg"
import hero_title from "../../../assets/hero_title.png"
import play_icon from "../../../assets/play_icon.png"
import info_icon from "../../../assets/info_icon.png"
function Home() {
  return (
    <div className='home'>
       <Navbar></Navbar>
       <div className="hero">
        <img src={hero} className='hero-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient  order, young  mann living in modern instanbull embarks  on a quest  to save  the city  form an  immortal enemy</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />info</button>
          </div>
          <Title/>
           
        </div>
       </div>
       <div className="more-cards">
       <Title title={"Blockbuster movies"}category={"top_rated"}/>
       <Title title={"only on Netflix"} category={"popular"}/>
       <Title title={"Upcoming"} category={"upcoming"}/>
       <Title title={"Top picks for you"} category={"top_rated"}/>
       </div>
     <Footer/>
    </div>
  )
}

export default Home
