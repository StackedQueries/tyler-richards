import Nav from './Nav'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <header>
            <h2 className='landing navElement'>Tyler Richards</h2>
            <Nav classItems="headerNav" />
        </header>
  )
}

export default Header
