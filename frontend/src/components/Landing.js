import '../styles/landing.scss'
import Nav from './Nav'
import React, { useState, useEffect, useRef } from "react";
import { getQuote } from '../api';
/* 
import { animate } from '../scripts/dvd' */
const Landing = () => {

    const locale = 'en';
    const [today, setDate] = useState(new Date());
    const [quote, setQuote] = useState({
        q: '',
        a: ''
    });

    useEffect(() => {
        const fetchQuote = async () => {
            const q = await getQuote()
            setQuote(q.data);
        }
        fetchQuote();

        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);


    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const time = today.toLocaleTimeString(locale);

    return (

        <div >
            <div className="container">
                <h1 className="landing">
                    Tyler Richards
                </h1>
            </div>
            <Nav classItems="headerNav" />
            <div className='linebox'>
                <p className='side'>{date}</p>
                <p className='funbox '><span className="sliding">{quote.q} - {quote.a}</span><span className="sliding">{quote.q} - {quote.a}</span></p>

                <p className='side'>{time}</p>
            </div>
        </div>
    )
}

export default Landing
