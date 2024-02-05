import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'

export const Navbar = ( {showCollections} ) => {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false)

    const handleClick = () => {
        setIsBurgerClicked(!isBurgerClicked)
    }

    return (
        <div className={style.nav_panel}>
            <div className={style.container}>
                <nav className={style.navbar}>
                    <div className={style.logo}>
                        <img src={'images/header_logo.png'} alt='logo' />
                        <div>NFTcity</div>
                    </div>
                    <div className={style.links_div}>
                        <img 
                            src={'images/burger_logo.svg'}
                            className={style.hamburger}
                            alt='burger logo' 
                            onClick={handleClick}
                        />
                        <ul className={isBurgerClicked ? `${style.list} ${style.active}` : style.list}>
                            <li className={style.link}>
                                Marketplace
                            </li>
                            <li
                                className={style.link}
                                onClick={() => showCollections(true)}
                            >
                                Rankings
                            </li>
                            <li className={style.link}>
                                About
                            </li>
                        </ul>
                        {/* <button className={style.btn}>
                            <img src={'images/btn_user-logo.png'} alt='user_logo' />
                            Sign Up
                        </button> */}
                    </div>
                </nav>
            </div>
        </div>
    )
}