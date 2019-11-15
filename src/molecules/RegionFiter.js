import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './css/RegionFilter.css'
import { SET_REGION_FILTER } from '../action';

const RegionFilter = ()=>{
    const dispatch = useDispatch();
    const {regionFilterList} = useSelector(state=> state.card)
    const arr = ["데마시아", "프렐요드", "아이오니아", "녹서스","필트오버 & 자운", `그림자 군도`]
    const imgarr = ["icon-demacia", "icon-freljord", "icon-ionia","icon-noxus","icon-piltoverzaun","icon-shadowisles"]
    const regionFiltering = (target)=> (el)=>{
        dispatch({
            type : SET_REGION_FILTER,
            data : target
        })
    }
    return(
        <div style ={{alignSelf : "flex-start"}}>
            <p>지역</p>
            <div className = "region_filter_container">
                {arr.map((el,i)=>{
                    return(
                        <div className = {regionFilterList.findIndex((regionFilter)=> el === regionFilter) === -1?
                        "":
                        "region_selected"}>
                            <img onClick = {regionFiltering(el)} key = {i} src = {require(`../rune_image/ko_kr/img/region/${imgarr[i]}.png`)}/>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )
}

export default RegionFilter;