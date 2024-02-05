import React from 'react'
import style from './NftCard.module.css'

export function NftCard({ nftData, openModal }) {
    return (
        <div 
            className={style.card}
            onClick={( ) => openModal()}
        >
            <div className={style['image-div']}>
                <img src={nftData.token.image} alt='nft image' />
            </div>
            <div className={style.body}>
                <div className={style['nft-collection']}>
                    <div className={style['collection-name']}>
                        {nftData.token?.collection?.name ?
                            nftData.token.collection.name.length > 20 ?
                                `${nftData.token.collection.name.slice(0, 20)}...`
                                :
                                nftData.token.collection.name
                            :
                            'Без названия'
                        }
                    </div>
                </div>
                <div className={style['nft-name']}>
                    {/* Обрезание имени, если длинное (больше 18 символов) */}
                    {nftData.token?.name ?
                        nftData.token.name.length > 18 ?
                            `${nftData.token.name.slice(0, 18)}...`
                            :
                            nftData.token.name
                        :
                        'Без названия'
                    }
                </div>
                <div className={style['cost-div']}>
                    <div className={style.price}>
                        <div className={style.cost__title}>Floor Price</div>
                        <div className={style.cost__value}>
                            {nftData.token.collection.floorAskPrice ?
                                `${nftData.token.collection.floorAskPrice?.amount.native} ${nftData.token.collection.floorAskPrice?.currency.symbol}`
                                :
                                `Цены пока нет`
                            }
                        </div>
                    </div>
                    <div className={style.rarity}>
                        <div className={style.cost__title}>Raruty Rank</div>
                        <div className={style.cost__value}>
                            {nftData.token.rarityRank ?
                                `${nftData.token.rarityRank}`
                                :
                                `Нет данных`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}