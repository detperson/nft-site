import React from 'react'
import style from './Modal.module.css'

export function Modal({ children }) {
    return (
        <>
            <div 
                className={style.bg_blackout} 
            />
            <div 
                className={style.modal}
            >

                {children}
            </div>
        </>
    )
}

