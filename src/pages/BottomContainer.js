import React from 'react'
import {useSelector} from 'react-redux'
import DeckList from '../molecules/DeckList'
import CardList from '../molecules/CardList'
import './css/BottomContainer.css'
const BottomContainer = ()=>{
    const {cardList} = useSelector(state => state.card)
    return(
        <div className = "bottom_card_container">
            <CardList cardList = {cardList}/>
            <DeckList />
        </div>
    )
}

export default BottomContainer