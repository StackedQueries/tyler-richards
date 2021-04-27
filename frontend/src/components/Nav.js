import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';

const Nav = ({ classItems }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    const links = {
        "/": "Home",
        "/work": "Work",
        "/blog": "Blog",
        "/about": "About",
        "/contact": "Contact"
    }
    const newLinks = []
    for (const link in links) {

        newLinks.push(link)
    }

    return (

        <nav>
            <ul className={classItems}>
                {newLinks.map((link, index) => (
                    <li key={index}> <Link key={index} to={link}>{links[link]}</Link></li>
                ))}
                {user ? (
                    <li><Link to="#" onClick={logout}>logout</Link></li>
                ) : (
                    <li><Link to="/login">login</Link></li>
                )}
            </ul>
        </nav >
    )
}

export default Nav
