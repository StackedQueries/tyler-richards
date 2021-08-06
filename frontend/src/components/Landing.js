import '../styles/landing.scss'
import Nav from './Nav'
import React, { useState, useEffect, useRef } from 'react'
import { getQuote, getRandomImage } from '../api'
import { GetCurrentSize } from '../utils/ViewportProvider'
import Marquee from "react-fast-marquee";
const Landing = () => {
  const size = GetCurrentSize()
  const locale = 'en'
  const [secondQuote, setSecondQuote] = useState(true)
  const [today, setDate] = useState(new Date())
  const [quote, setQuote] = useState({
    q: '',
    a: ''
  })
  const [bgImage, setBgImage] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const q = await getQuote();
      setQuote(q.data);
      try{
      const image = await getRandomImage();
      await setBgImage(image.data);
    } catch (err){
      console.log(err)
    }
    }
    fetch()

    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (size !== 'large') {
      setSecondQuote(false)
    }
  }, [size])

  const day = today.toLocaleDateString(locale, { weekday: 'long' })
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`
  const hour = today.getHours()
  const time = today.toLocaleTimeString(locale)

  return (
      
         <div className="full-landing fade-in">
          
      <div className="container" >
          {bgImage ? <img className="fade-in" src={bgImage?.urls.full}></img> : null}
          <h1 className="landing">
              Tyler Richards
          </h1>
      </div>
      <div className="bottom">
          {bgImage ? <>
          <div className="attr fade-in">
            Photo by <a href={`${bgImage.user.links.html}?utm_source=TylerRichards&utm_medium=referral`}>
            {bgImage.user.first_name} {bgImage.user.last_name} 
            </a> on <a href={'https://unsplash.com/?utm_source=TylerRichards&utm_medium=referral'}>Unsplash</a>
            </div>
            </> : null}
          <Nav classItems="headerNav" />
          <div className='linebox'>
              <p className='side'>{date}</p>
              <p className='funbox '>
              <Marquee gradient={false} >
                  <span>{quote.q} - {quote.a} </span>
                   </Marquee>
                  </p>

              <p className='side'>{time}</p>
          </div>
      </div>
     
  </div>
        
  )
}

export default Landing
