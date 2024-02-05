import React, {useEffect, useState} from 'react'
import style from './TopCollections.module.css'
import {CollectionCard} from "../CollectionCard/CollectionCard";

export function TopCollections() {
    const [dataCollections, setDataCollections] = useState({})

    useEffect(() => {
        fetchCollections()
    }, [])

    // try {
    //     fetchCollections()
    // } catch (error) {
    //     console.log('Error:', error.message)
    // }

    const fetchCollections = async () => {
        const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}}
        const response = await fetch(`https://api.reservoir.tools/collections/v7`, options)
        const json = await response.json()

        setDataCollections(json)
    }


    return (
        <div className={style.collections__block}>
            <div className={style.container}>
                {dataCollections.collections && dataCollections.collections.map((oneCollection, index) => {
                    return (
                        <CollectionCard key={oneCollection.id} collection={oneCollection} num={index} />

                        // <div key={oneCollection.id}>
                        //     <img src={oneCollection.image} alt='Collection image' style={{width: '200px'}} />
                        //     <div style={{color: '#FFF', width: '200px'}}>
                        //         {oneCollection.name}
                        //     </div>
                        // </div>
                    )
                })}
            </div>
        </div>
    )
}