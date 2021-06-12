
import Header from '../Header';
import Footer from '../Footer';
const About = () => {
    return (
        <div>
            <Header />
            <div className='page-content'>
                <h1 className='page-header'>About</h1>

                <h3 className='section-heading'>Hey, I'm Tyler</h3>
                <div className='column'>
                    <div>
                        <p>I'm an Atlanta based web developer that makes ~almost~ cool things. Since I got into programming, back in ~2015ish, I have had the pleasure
                        of getting to work with loads of technologies including Python, Java, and PHP, and study topics ranging from AI and Machine learning all the way to
                        creating automatic deploying tools. As of now, I'm working on fullstack applications like this very site and writing the occasional article! Right now, I'm really enjoying using
                        React, Express, and tools like Docker and MongoDB to create things.
                </p>
                    </div>
                    <div>
                        <h4 className="center-text">
                            Things I also enjoy
                </h4>
                        <ol className="center-text">
                            <li>Coffee</li>
                            <li>Fishing</li>
                            <li>Food</li>
                            <li>Naps</li>
                            <li>Coffee</li>
                            <li>Making Lists</li>
                        </ol>
                    </div>
                </div>
                <p>
                    If you want to start on a project or just need a little help, feel free to reach out! I'm excited to hear from you
                    and I promise I won't bite (that costs extra)!
                </p>
            </div>
            <Footer />
        </div >
    )
}

export default About
