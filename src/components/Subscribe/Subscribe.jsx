import React from 'react'
import style from './Subscribe.module.css'

export function Subscribe() {
    return (
        <form>
            <div className={style['subscribe-container']}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Enter your email here"
                />
                <button className={style['subscribe-btn']}>Subscribe</button>
            </div>
        </form>
    )
}