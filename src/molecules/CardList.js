import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_CARD_DECK } from '../action';
import './css/CardList.css'
const CardList = ({cardList})=>{
    const dispatch = useDispatch();
    const {costFilterList, regionFilterList, filterNameContents} = useSelector(state=> state.card)
    const setCardToDeck = (el) =>()=>{
        const data = {
            cardCode : el.cardCode,
            cost : el.cost,
            region : el.region,
            name : el.name,
            rarity : el.rarity
        }
        dispatch({
            type : SET_CARD_DECK,
            data : data
        })
        
    }
    
    return(
        <div className = "card_list_container">
            {cardList.filter(el=> el.rarity !== "없음")
                .filter((el)=>{
                if(costFilterList.length === 0){
                    return true
                }else{
                    const check = costFilterList.findIndex((list)=> list === el.cost)
                    return check !== -1
                }
            }).filter((el)=>{
                if(regionFilterList.length ===0){
                    return true
                }else{
                    const check = regionFilterList.findIndex((regionFilter)=> regionFilter === el.region)
                    return check !==-1;
                }
            }).filter((el)=>{
                if(filterNameContents.length ===0){
                    return true
                }else{
                    
                    const test = new RegExp(`${filterNameContents}`)
                    return test.test(el.name)

                }
            })
            .sort((a,b)=> a.cost - b.cost)
            .map((el, i)=>{
                return <img onClick = {setCardToDeck(el)} key = {i} width ={200} height = {200} src = {`https://kimserverrunetera.s3.ap-northeast-2.amazonaws.com/rune_image/ko_kr/img/cards/${el.cardCode}.png` }alt = "이미지없음"/>
            })}
      </div>
    )
}

export default CardList