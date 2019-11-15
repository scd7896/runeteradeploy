import React from 'react'
import {useDispatch} from 'react-redux'
import {RMV_CARD_DECK} from '../action'
import './css/DeckCard.css'

const DeckCard = ({cardData})=>{
    let backGround;
    const dispatch = useDispatch();
    switch(cardData.region){
        case "아이오니아" :
            backGround = "aionia";
            break;
        case "녹서스" :
            backGround = "noxus";
            break;
        case "데마시아" :
            backGround = "demacia";
            break;
        case "그림자 군도":
            backGround = "shadow";
            break;
        case "프렐요드" :
            backGround = "frelyord";
            break;
        default :
            backGround = "fieldover"
    }
    const removeInToDeck = ()=>{
        dispatch({
            type: RMV_CARD_DECK,
            data : cardData.cardCode
        })
    }
    return(
        <div className = {`deck_card_container ${backGround}`} onClick = {removeInToDeck}>
            <p className = "cost_container">{cardData.cost}</p>
            <p>{cardData.name}</p>
            <p>{cardData.count}</p>
        </div>
    )
}

export default DeckCard;