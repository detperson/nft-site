import React from 'react'
import style from './Footer.module.css'
import { Subscribe } from '../Subscribe/Subscribe'

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footer__container}>
                    <div className={style.footer__body}>
                        <div className={style.section1}>
                            <div className={style.logo}>
                                <img src={'images/header_logo.png'} alt='logo' />
                                <div>NFTcity</div>
                            </div>
                            <div className={style.text1}>
                                {/* NFT marketplace UI created with Anima for Figma. */}
                                NFT platform for viewing digital art.
                            </div>
                            <div className={style.text2}>
                                Join our community
                            </div>
                            <div className={style['social-media']}>
                                <img src={'images/discord_logo.svg'} alt='discord-logo' />
                                <img src={'images/youtube_logo.svg'} alt='youtube-logo' />
                                <img src={'images/twitter_logo.svg'} alt='twitter-logo' />
                                <img src={'images/instagram_logo.svg'} alt='instagram-logo' />
                            </div>
                        </div>
                        <div className={style.section2}>
                            <div className={style.title}>Explore</div>
                            <ul className={style.list}>
                                <li>Marketplace</li>
                                <li>Rankings</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className={style.section3}>
                            <div className={style.title}>Awesome NFT Cripto Site</div>
                            <div className={style['section3-text']}>
                                Created by Ilya for everyone. 2024.
                            </div>
                            {/* <Subscribe /> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}