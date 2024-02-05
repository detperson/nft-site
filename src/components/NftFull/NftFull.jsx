import React from 'react'
import style from './NftFull.module.css'

function cropTextIfMore(text, cropSymbols) {
    if (text.length > cropSymbols) {
        return `${text.slice(0, cropSymbols)}...`
    }
    return text
}

export function NftFull({ modalNftData, modalIsOpen }) {
    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div className={style.names_block}>
                    {/* ----------Название---------- */}
                    <div className={style['nft-name']}>
                        {/* Обрезание имени, если длинное (больше 30 символов) */}
                        {modalNftData.token?.name ?
                            // modalNftData.token.name.length > 30 ?
                            //     `${modalNftData.token.name.slice(0, 30)}...`
                            //     :
                            //     modalNftData.token.name
                            cropTextIfMore(modalNftData.token.name, 30)
                            :
                            'Без названия'
                        }
                    </div>
                    {/* ----------Имя Коллекции---------- */}
                    <div className={style['nft-collection']}>
                        {/* Картинка коллекции */}
                        {modalNftData.token.collection.image && 
                            <img 
                                src={modalNftData.token.collection.image} 
                                className={style['collection-image']} 
                                alt='collection image' 
                            />
                        }
                        <div className={style['collection-name']}>
                            {modalNftData.token?.collection?.name ?
                                // modalNftData.token.collection.name.length > 40 ?
                                    // `${modalNftData.token.collection.name.slice(0, 40)}...`
                                    // :
                                    // modalNftData.token.collection.name
                                cropTextIfMore(modalNftData.token.collection.name, 40)
                                :
                                'Без названия'
                            }
                        </div>
                    </div>
                </div>
                <div 
                    className={style.close_card_btn}
                    onClick={() => modalIsOpen(false)}
                >
                ✕
                </div>
            </div>
            <div className={style.card_main}>
                {/* ----------Картинка---------- */}
                <div className={style['image-div']}>
                    <img src={modalNftData.token.image} alt='nft image' />
                </div>
                {/* ----------Body---------- */}
                <div className={style.body}>
                    <div className={style.price}>
                        <div className={style.field__title}>Price</div>
                        <div className={style.field__value}>
                            {modalNftData.token.collection.floorAskPrice ?
                                `${modalNftData.token.collection.floorAskPrice?.amount.native} ${modalNftData.token.collection.floorAskPrice?.currency.symbol}`
                                :
                                `Цены пока нет`
                            }
                        </div>
                    </div>
                    <div className={style.id}>
                        <div className={style.field__title}>ID</div>
                        <div className={style.field__value}>
                            {modalNftData.token.tokenId ?
                                // modalNftData.token.tokenId.length > 6 ?
                                //     `${modalNftData.token.tokenId.slice(0, 6)}...`
                                //     :
                                //     modalNftData.token.tokenId
                                cropTextIfMore(modalNftData.token.tokenId, 6)
                                :
                                `-`
                            }
                        </div>
                    </div>
                    <div className={style.price_usd}>
                        <div className={style.field__title}>Price USD</div>
                        <div className={style.field__value}>
                            {modalNftData.token.collection.floorAskPrice ?
                                // `${modalNftData.token.collection.floorAskPrice?.amount.usd}`
                                `${Math.round((Number(modalNftData.token.collection.floorAskPrice?.amount.usd)) * 10) / 10} $`
                                :
                                `Цены пока нет`
                            }
                        </div>
                    </div>
                    <div className={style.rarity}>
                        <div className={style.field__title}>Rarity</div>
                        <div className={style.field__value}>
                            {modalNftData.token.rarityRank ?
                                `${modalNftData.token.rarityRank}`
                                :
                                `-`
                            }
                        </div>
                    </div>
                    <div className={style.contract}>
                        <div className={style.field__title}>Contract</div>
                        <div className={style.field__value}>
                            {modalNftData.token.contract ?
                                `${modalNftData.token.contract.slice(0, 6)}`
                                :
                                `-`
                            }
                        </div>
                    </div>
                    <div className={style.royalties_bps}>
                        <div className={style.field__title}>RoyaltiesBps</div>
                        <div className={style.field__value}>
                            {modalNftData.token.collection.royaltiesBps ?
                                `${modalNftData.token.collection.royaltiesBps}`
                                :
                                `-`
                            }
                        </div>
                    </div>
                    <div className={style.last_appraisal_value}>
                        <div className={style.field__title}>Last Appraisal Value</div>
                        <div className={style.field__valuee}>
                            {modalNftData.token.lastAppraisalValue ?
                                `${modalNftData.token.lastAppraisalValue}`
                                :
                                `-`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}