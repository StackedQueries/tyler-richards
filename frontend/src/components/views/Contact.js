

import Header from '../Header';
import Footer from '../Footer';
const Contact = () => {
    return (
        <div>
            <Header />

            <div className='page-content'>
                <h1 className='page-header'>Contact</h1>
                <div className="post-section">
                    <h3 className="section-heading">Want to reach out?</h3>
                    <p>Looking to build a project, or maybe just a little help? Feel free to reach out to me and let me know what you have going on.</p>
                    <p>Reach out at <code>Hello@Tyler-Richards.com</code></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
