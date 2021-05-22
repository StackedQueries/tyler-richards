
import Header from '../Header';
import Footer from '../partials/Footer';
const About = () => {
    return (
        <div>

            <Header />

            <div className='page-content'>
                <h1 className='page-subheader'>About</h1>
                <h3>Hey, I'm Tyler</h3>
                <p>I'm an Atlanta based web developer that makes ~almost~ cool things. I also write articles from time to time and drink more
                    coffee than I should!
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About
