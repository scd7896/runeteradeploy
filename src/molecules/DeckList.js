import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DeckEncoder, Card} from 'runeterra'
import cardList from '../data/set1-ko_kr'
import DeckCard from '../atomic/DeckCard'
import { SET_DECODE_DECK } from '../action'
import './css/DeckList.css'
const DeckList = ()=>{
    const dispatch = useDispatch();
    const [codeText, setCodeText] = useState('')
    const {deckList,deckCount, championCount} = useSelector(state => state.card)
    const textChange = (e)=>{
        setCodeText(e.target.value)
    }
    const encodingDeckCode = (e)=>{
        
        if(deckList.length === 0){
            return;
        }
        const encodeDeck = deckList.map((el,i)=>{
            const tmpCard = new Card();
            tmpCard.code = el.cardCode;
            tmpCard.count = el.count;
            return tmpCard;
        })
        
        const code = DeckEncoder.encode(encodeDeck)
        
        setCodeText(code)
    }
    const decodeDeckCode = ()=>{
        if(codeText.length === 0){
            return;
        }
        const deck = DeckEncoder.decode(codeText);
        const decodeDeck = deck.map((el)=>{
            const index = cardList.findIndex((card)=> card.cardCode === el.code)
            const targetCard = {
                name : cardList[index].name,
                cost : cardList[index].cost,
                region : cardList[index].region,
                cardCode : cardList[index].cardCode,
                count : el.count,
                rarity : cardList[index].rarity
            }
            return targetCard
        })
        dispatch({
            type : SET_DECODE_DECK,
            data : decodeDeck
        })
        
    }
    return(
        <div className = "deck_list_container">
            <div>
                <div className = "code_input_container">
                    <input className ="code_input_text" type = "text" value = {codeText} onChange = {textChange}/>
                </div>
                <div className = "code_input_action_container">
                    <button className = "code_input_action_button" onClick = {decodeDeckCode}>가져오기</button>
                    <button className = "code_input_action_button" onClick = {encodingDeckCode}>발급하기</button>
                </div>
                <div className = "count_container">
                    <p>덱 :{deckCount}/40</p>
                    <p>챔피언 : {championCount}/6</p>
                </div>
            </div>    
            {deckList.map((el,i)=>{
                return <DeckCard cardData = {el} key = {i}/>
            })}
        </div>
    )
}
export default DeckList;