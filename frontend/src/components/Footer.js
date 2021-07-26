import Nav from './Nav'

const Footer = () => {
  const d = new Date()
  return (
        <footer>
            <Nav />
            <h6>Tyler Richards &#x000B7; {d.getFullYear()}</h6>
        </footer>
  )
}

export default Footer
