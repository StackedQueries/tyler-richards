import Header from '../Header'
import Footer from '../Footer'

const NotFound = () => {
  return (
        <div>
            <Header />
            <div className='page-content'>
        <div className="infoform">
            <h1 className="page-header">404</h1>
            <h2>This page doesn't exsist, has been moved, or deleted.</h2>
            </div>

        </div>
        <Footer />
        </div>
  )
}

export default NotFound
