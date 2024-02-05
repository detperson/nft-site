import React from 'react'
import style from './CollectionCard.module.css'

export function CollectionCard( {collection, num} ) {
    return (
        <div className={style.collection_card}>
            <div className={style.list_number}>
                {num + 1}
            </div>
            <div className={style.collection_logo}>
                <img
                    src={collection.image}
                    alt='collection logo'
                />
            </div>
            <div className={style.collection_name}>
                {collection.name}
            </div>
            <div className={style.change_price}>
                {collection.volumeChange['7day'] >= 0 ?
                    `+${Math.round(collection.volumeChange['7day'] * 100) / 100}`
                :
                    `-${Math.round(collection.volumeChange['7day'] * 100) / 100}`
                }
            </div>
            <div className={style.nfts_sold}>
                {collection.ownerCount}
            </div>
            <div className={style.collection_volume}>
                12.4 ETH
            </div>
        </div>
    )
}