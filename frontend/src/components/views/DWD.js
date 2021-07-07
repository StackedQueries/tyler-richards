import Header from '../Header';
import Footer from '../Footer';
import Connection from '../Connection';
const DWD = () => {
    return (
        <div>
            <Header />
            <div className='page-content'>
                <h1 className='page-title'>Contact</h1>
                <Connection content={{
                    header: "Looking for Defiant Web Design?",
                    input1: "You're in the right place! I'm Tyler and I work on websites, programs, and all different types of tech. Feel free to look around and let me know if you're interested in myself for one of your projects.",
                    input2: "Reach out at Tyler@Tyler-Richards.com",
                }}/>


                <a href="mailto:tyler@tyler-richards.com" className="button">Email Me!</a>
            </div>
            <Footer />
        </div>
    )
}

export default DWD
