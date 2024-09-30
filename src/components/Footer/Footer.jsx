import React from 'react'
import "./Footer.css"
import youtube from "../../assets/youtube_icon.png"
import twitter from "../../assets/twitter_icon.png"
import instagram from "../../assets/instagram_icon.png"
import facebook from "../../assets/facebook_icon.png"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-icons">
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
        </div>
        <ul>
            <li>Audio description</li>
            <li>Help center</li>
            <li>Gift cards</li>
            <li>Media center</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Legal notice</li>
            <li>cookie preference</li>
            <li>corporate information</li>
            <li>contact us</li>
        </ul>
        <p className='copyright-text'> ©  1997-2023 Netflix,inc</p>
      
    </div>
  )
}

export default Footer
