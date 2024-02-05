import React, {useState, useContext} from 'react'
import style from './SearchForm.module.css'
import { Context } from '../../context'

export function SearchForm() {
    const [value, setValue] = useState('')
    const [isLoadingSearch, setIsLoadingSearch] = useState(false)
    const {searchBy, changeSearchByTo, setSearchValue, setDataFetch} = useContext(Context)

    const searchBtnHandler = (event) => {
        event.preventDefault()
        let url = ''
        if (searchBy === 'collection') {
            url = `tokens/v6?collection=${value.trim()}&limit=6`
        } else if (searchBy === 'user_tokens') {
            url = `users/${value.trim()}/tokens/v7?sortBy=lastAppraisalValue&limit=6`
        }
        const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}};
        if (value.trim() !== '') {
            setIsLoadingSearch(true)
        }
        fetch(`https://api.reservoir.tools/${url}`, options)
            .then(response => response.json())
            .then(response => {
                setDataFetch(response)
                setIsLoadingSearch(false)
            })
            .catch(err => {
                setIsLoadingSearch(false)
                console.error(err)
            })
    }

    return (
        <div className={style.search__block}>
            <div className={style.container}>
                <div className={style['search-form']}>
                    <h1 className={style.header}>Browse Digital Art</h1>
                    <div className={style.subtitle}>Look at the large number of NFTs and digital Collections on the NFT City.</div>
                    <form onChange={(event) => event.preventDefault()}>
                        <div className={style['input-all']}>
                            <button
                                className={searchBy === 'collection' ? `${style['by-collection-btn']} ${style.active}` : style['by-collection-btn']}
                                onClick={(event) => {
                                    event.preventDefault()
                                    changeSearchByTo('collection')
                                }}
                            >Collection
                            </button>
                            <button
                                className={searchBy === 'user_tokens' ? `${style['user-tokens-btn']} ${style.active}` : style['user-tokens-btn']}
                                onClick={(event) => {
                                    event.preventDefault()
                                    changeSearchByTo('user_tokens')
                                }}
                            >User Tokens
                            </button>
                            <div className={style['input-block']}>
                                <input
                                    type="text"
                                    className={style.input}
                                    // placeholder="Search your favourite NFTs"
                                    placeholder="Search by Adress your favorite NFTs"
                                    value={value}
                                    onChange={(event) => {
                                        setValue(event.target.value)
                                        setSearchValue(event.target.value)
                                    }}
                                />
                                <button
                                    className={style['search-btn']}
                                    onClick={searchBtnHandler}
                                    disabled={isLoadingSearch}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.9135 15.9133C16.2063 15.6204 16.6812 15.6204 16.9741 15.9133L21.5304 20.4695C21.8233 20.7624 21.8233 21.2373 21.5304 21.5302C21.2375 21.8231 20.7626 21.8231 20.4697 21.5302L15.9135 16.9739C15.6206 16.681 15.6206 16.2062 15.9135 15.9133Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div style={{color: 'gray', marginTop: '5px', marginLeft: '15px', fontSize: '14px', opacity: 0.6}}>
                        Например: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63, <br/>
                        User Tokens: 0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00
                    </div>
                </div>
                <div className={style.loader_div}>
                    {isLoadingSearch &&
                        <div className={style.loader}><span className={style.spinner_loader} />Loading...</div>
                    }
                </div>
                
            </div>
        </div>
    )
}