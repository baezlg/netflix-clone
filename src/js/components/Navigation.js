import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../../css/app.css";

function Navigation() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    return (
        <nav className={`nav ${show && "nav--black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />
            <ul className="nav__left">
               <li className="nav__item"><a className="nav__link active" href="#">Home</a></li>
               <li className="nav__item"><a className="nav__link" href="#">TV shows</a></li>
               <li className="nav__item"><a className="nav__link" href="#">Movies</a></li>
               <li className="nav__item"><a className="nav__link" href="#">Latest</a></li>
               <li className="nav__item"><a className="nav__link" href="#">My List</a></li>
            </ul>
            <div className="nav__right">
                <SearchIcon className="nav__right-icon"/>
                <a href="#" className="nav__right-link">Kids</a>
                <CardGiftcardIcon className="nav__right-icon"/>
                <NotificationsIcon className="nav__right-icon"/>
            </div>
            <img
                className="nav__avatar"
                src="img/profile_avatar.png"
                alt="avatar"
            />
        </nav>
    )
}

export default Navigation
