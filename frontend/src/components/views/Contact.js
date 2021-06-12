

import Header from '../Header';
import Footer from '../Footer';
import Connection from '../Connection';
const Contact = () => {
    return (
        <div>
            <Header />
            <div className='page-content'>
                <h1 className='page-title'>Contact</h1>
                <Connection content={{
                    header: "Want to reach out?",
                    input1: "Looking to build a project, or maybe just a little help? Feel free to reach out to me and let me know what you have going on.",
                    input2: "Reach out at Tyler@Tyler-Richards.com",

                }

                }
                />


                <a href="mailto:tyler@tyler-richards.com" className="button">Email Me!</a>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
