
import Header from '../Header';
import Footer from '../Footer';
import Connection from '../Connection';
import { GetCurrentSize } from '../../utils/ViewportProvider';
import { useEffect, useState } from 'react'
const About = (props) => {
    
    const size = GetCurrentSize();
    useEffect(() => {

        console.log(size);
    }, [size]);

    return (
        <div>
            <Header />
            <div className='page-content'>
                <h1 className='page-title'>About</h1>
                    <h3 className="page-header">Hey, I'm Tyler 👋</h3>
                <div className='post-section'>
                    <div>
                        <p>I'm an Atlanta based web developer that makes ~almost~ cool things. Since I got into programming, back in ~2015ish, I have had the pleasure
                            of getting to work with loads of technologies including Python, Java, and JS, and study topics ranging from AI and Machine learning all the way to
                            creating automatic deploying tools. As of now, I'm working on fullstack applications like this very site and writing the occasional article! Right now, I'm really enjoying using
                            React, Express, and tools like Docker and MongoDB to create things.
                        </p>
                    </div>
                    {size!=="large" ? <img className="about-pic" src={`${ process.env.REACT_APP_API_URL}/imgs/568818c0-4046-4430-97a9-36905374b9f91604619045588.jpg`} alt="Picture of me" />:null}
                    <div className="row">
                       {size==="large" ? <img className="about-pic" src={`${ process.env.REACT_APP_API_URL}/imgs/568818c0-4046-4430-97a9-36905374b9f91604619045588.jpg`} alt="Picture of me" />:null}
                        <div>
                            <p>I’m super competitive and love a good challenge. In my free time, I love to learn new things, play video games, and adventure outdoors. </p>
                            <h3 className="section-heading center-text">
                                Things I also enjoy
                            </h3>
                            <ul className="center-text">
                                <li>Coffee</li>
                                <li>Fishing</li>
                                <li>Food</li>
                                <li>Naps</li>
                                <li>Coffee</li>
                                <li>Making Lists</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="center">
                        <p className="page-section underline">
                            If you want to start on a project or just need a little help, feel free to reach out! I'm excited to hear from you
                            and I promise I won't bite!
                        </p>
                        <Connection content={{
                            header: "Like My Stuff?",
                            input1: "Looking to build a project, or maybe just a little help? Feel free to reach out to me and let me know what you have going on.",
                        }}
                        />


                        <a href="/contact" className="button ">Contact Me!</a>
                    </div>
            </div >
            <Footer />
        </div >
    )
}

export default About
